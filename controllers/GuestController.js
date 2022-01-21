const database = require("../db/index");
const {status} = require("../utils/status");

const GetCategories = async (req, res) =>{
    const {lang} = req.params
    const query_text = `
        SELECT ct.name, c.id, (SELECT COUNT(*) FROM products p WHERE p.category_id = ct.category_id), c.destination
        FROM category_translations ct
            INNER JOIN categories c
                ON c.id = ct.category_id
            INNER JOIN languages l
                ON l.language_code = '${lang}'
        WHERE ct.language_id = l.id
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetProducers = async (req, res) =>{
    const {lang} = req.params;
    const query_text = `
        SELECT * FROM producers
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetProducts = async (req, res) =>{
    const {page, limit,  search, category_id, producer_id,min_price, max_price, sort_column, sort_direction, recomended, new_in_come, discounts } = req.query;
    const {lang} = req.params
    let offSet = ``
    if(page && limit){
        offSet = ` OFFSET  ${(page-1)*limit} LIMIT ${limit}`
    }
    let wherePart = ``
    if(search){
        wherePart = ` AND (pt.name *~ '${search}' OR pr.description *~ '${search}')`
    }
    let categories = []
    try {
        categories = JSON.parse(category_id)
    } catch (e) {
        console.log(e, "---categories")
    }
    console.log(categories)
    if(categories.length > 0){
        wherePart = ` AND p.category_id IN ( ${categories?.map(item => `${item}`).join(',')} )`
    }
    let producers = []
    try {
        producers = JSON.parse(producer_id)
    } catch (e) {
        console.log(e, "---producers")
    }
    if(producers.length > 0){
        wherePart = ` AND p.producer_id IN ( ${producers?.map(item => `${item}`).join(',')} )`
    }

    if (min_price && max_price){
        wherePart += ` AND (p.price > ${min_price} AND p.price < ${max_price})`
    }else if(min_price && !max_price){
        wherePart += ` AND p.price > ${min_price}`
    }else if(!min_price && max_price){
        wherePart += ` AND p.price < ${max_price}`
    }else{
        wherePart +=``
    }

    let column = ``
    let direction = ``
    if(sort_column){
        column = `${sort_column}`
    }else{
        column = `p.id`
    }
    if(sort_direction){
        direction = `${sort_direction}`
    }else{
        direction = `ASC`
    }
    if(recomended){
        wherePart += ` AND p.recomended = true`
    }
    if(new_in_come){
        wherePart += ` AND p.new_in_come = true`
    }
    if(discounts){
        wherePart += ` AND d.id IS NOT NULL`
    }
    const query_text = `
        SELECT 
            (SELECT COUNT(*) 
                FROM products p
                    INNER JOIN languages l
                        ON l.language_code = '${lang}'
                    INNER JOIN product_translations pt 
                        ON pt.product_id = p.id AND pt.language_id = l.id
                    INNER JOIN producers prod
                        ON prod.id = p.producer_id
                    INNER JOIN category_translations ct
                        ON ct.category_id = p.category_id AND ct.language_id = l.id
                    WHERE p.id > 0 ${wherePart}
            ),

                (SELECT json_agg(pro) FROM (
                    SELECT p.id::int, p.price::text, p.stock, p.destination, d.discount_value, d.min_value, 
                        pt.name, SUBSTRING(pt.description, 1, 30) AS description, p.recomended, p.new_in_come, ct.name AS category_name, prod.name AS producer_name

                    FROM products p
                        LEFT JOIN languages l
                            ON l.language_code = '${lang}'
                        INNER JOIN product_translations pt 
                            ON pt.product_id = p.id AND pt.language_id = l.id
                        LEFT JOIN producers prod
                            ON prod.id = p.producer_id
                        LEFT JOIN category_translations ct
                            ON ct.category_id = p.category_id AND ct.language_id = l.id
                        LEFT JOIN discounts d 
                            ON d.product_id = p.id AND d.discount_type_id = 1 AND d.validity::tsrange @> localtimestamp AND is_active = true
                    WHERE p.id > 0 ${wherePart}
                    ORDER BY ${column} ${direction}
                    ${offSet}
                    )pro) AS products
    `
    try {
        const {rows} = await database.query(query_text, [])
        console.log(rows)
        return res.status(status.success).json({"rows":rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetProductByID = async (req, res) =>{
    const {id, lang} = req.params;
    const query_text = `
        SELECT p.id::int, p.price::text, p.stock, p.destination, p.category_id, p.producer_id, pt.name, pt.description, 
        prod.name AS producer_name, ct.name AS category_name, d.discount_value, d.min_value
        FROM products p
            INNER JOIN languages l
                ON l.language_code = '${lang}'
            INNER JOIN product_translations pt 
                ON pt.product_id = p.id AND pt.language_id = l.id
            INNER JOIN producers prod
                ON prod.id = p.producer_id
            INNER JOIN category_translations ct
                ON ct.category_id = p.category_id AND ct.language_id = l.id
            LEFT JOIN discounts d 
                ON d.product_id = p.id AND d.discount_type_id = 1 AND d.validity::tsrange @> localtimestamp 
        WHERE p.id = ${id}
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetCartProducts = async (req, res) => {
    const {products} = req.query
    const {lang} = req.params
    let obj = []
    
    try {
        obj = await JSON.parse(products)
    } catch (e) {
        console.log(e)
    }
    console.log(obj)
    if(!obj?.length){
        return res.status(status.success).json({"rows":null})
    }
    const query_text = `
        SELECT p.id::int, p.price, p.stock, p.destination, p.category_id, p.producer_id, pt.name, pt.description, 
        prod.name AS producer_name, ct.name AS category_name, d.discount_value, d.min_value
        FROM products p
            INNER JOIN languages l
                ON l.language_code = '${lang}'
            INNER JOIN product_translations pt 
                ON pt.product_id = p.id AND pt.language_id = l.id
            INNER JOIN producers prod
                ON prod.id = p.producer_id
            INNER JOIN category_translations ct
                ON ct.category_id = p.category_id AND ct.language_id = l.id
            LEFT JOIN discounts d 
                ON d.product_id = p.id AND d.discount_type_id = 1 AND d.validity::tsrange @> localtimestamp AND is_active = true
            WHERE p.id IN (${obj.map(item => `${item.id}`).join(', ')})
        ORDER BY p.id ASC
    `
    try {
        // console.log(query_text)
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const CreateOrder = async (req, res) =>{
    const {lang} = req.params;
    const {products, coupon, phone, address, user_id, name} = req.body;
    console.log(req.body)
    if(!products?.length){
        return res.status(status.success).send("free cart")
    }
    const query_text = `
        SELECT p.id, p.price, p.stock, p.destination, p.category_id, p.producer_id, pt.name, pt.description, 
            prod.name AS producer_name, ct.name AS category_name, d.discount_value, d.min_value
        FROM products p
            INNER JOIN languages l
                ON l.language_code = '${lang}'
            LEFT JOIN product_translations pt 
                ON pt.product_id = p.id AND pt.language_id = l.id
            LEFT JOIN producers prod
                ON prod.id = p.producer_id
            LEFT JOIN category_translations ct
                ON ct.category_id = p.category_id AND ct.language_id = l.id
            LEFT JOIN discounts d 
                ON d.product_id = p.id AND d.discount_type_id = 1 AND d.validity::tsrange @> localtimestamp AND is_active = true
            WHERE p.id IN (${products?.map(item => `${item.id}`).join(', ')})
        `
    try {
        const {rows} = await database.query(query_text, [])
        // console.log("After first query")
        const cart = rows;
        // console.log(rows)
        let totalPrice = 0
        for(let i = 0; i<cart.length; i++){
            for(let j= 0; j<cart.length; j++){
                if(cart[i]?.id == products[j]?.id){
                    // console.log("I am in if")
                    cart[i].quantity = products[j].count
                }
            }
        }
        // console.log(cart)
        for(let i = 0; i<cart.length; i++){
            
            if(cart[i].discunt_value){
                // console.log(" i am in first if")
                // console.log(parseFloat(cart[i].price)*parseFloat(cart[i].discount_value)*0.01*parseFloat(cart[i].quantity))
                totalPrice = totalPrice +  parseFloat(cart[i].price)*(+cart[i].discount_value)*0.01*(+cart[i].quantity)
            }else{
                // console.log(parseFloat(cart[i].price)*parseFloat(cart[i].quantity))
                totalPrice = totalPrice +  parseFloat(cart[i].price)*(+cart[i].quantity)
            }
        }
        console.log(totalPrice)
        let discount = {}
        if(coupon){
            try{
                discount = await database.query(`SELECT * FROM discounts WHERE discount_type_id = 4 AND validity:: tsrange @> localtimestamp AND coupon = '${coupon}' AND is_active = true`, [])
            }catch(e){
            
            }
        }else{
            try {
                discount = await database.query(`SELECT * FROM discounts WHERE discount_type_id = 3 AND validity:: tsrange @> localtimestamp AND is_active = true AND min_value < ${totalPrice}`, [])                
            } catch (e) {
                
            }
        }
        // console.log("After second query")

        if(discount?.rows[0]){
            totalPrice = totalPrice * discount.rows[0].discount_value*0.01
        }
        // let orderItemQuery = ``
        // for (let i=0; i<cart.length; i++){
        //     orderItemQuery += `

        //     `
        // }
        // console.log(cart)
        const order_query = `
            WITH inserted AS (
                INSERT INTO orders(coupon, phone, address, user_id, total_price, discount_id, name)
                VALUES (${coupon ? `'${coupon}'` : `null`}, '${phone}', '${address}', ${user_id ? `${user_id}` : null}, 
                    ${totalPrice}, ${discount?.rows[0] ? discount?.rows[0].id : `null`}, '${name}')
                RETURNING *
            ), inserted_items AS (
                INSERT INTO order_items(product_id, quantity, price, order_id)
                VALUES ${cart.map(item => `(${item.id}, ${item.quantity}, ${item.price}, (SELECT id FROM inserted))`).join(', ')}
            ) SELECT id FROM inserted
        `
        // console.log(order_query)
        await database.query(order_query, [])
        console.log("After third query")

        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetNews = async (req, res) =>{
    const {lang} = req.params;
    const {page, limit} = req.query;
    let offSet = ``
    if(page && limit){
        offSet = ` OFFSET ${page*limit} LIMIT ${limit}`
    }
    const query_text = `
        SELECT (
            SELECT COUNT (*) FROM news n
            ), (SELECT json_agg(ne) FROM (
                SELECT n.created_at, n.destination, nt.title, nt.description
                FROM news n
                INNER JOIN languages l
                    l.language_code = '${lang}'
                INNER JOIN news_translations nt
                    ON nt.news_id = n.id
                ${offSet}
            )ne) AS news
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetBanners = async (req, res) =>{
    const query_text = `
        SELECT * FROM banner 
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetWishList = async (req, res) =>{
    const {lang} = req.params;
    const {products} = req.query;
    if(!products.length){
        return res.status(status.success).json({rows:null})
    }
    const query_text = `
        SELECT p.id::int, p.price, p.stock, p.destination, p.category_id, p.producer_id, pt.name, 
            pt.description, prod.name AS producer_name, ct.name AS category_name, d.discount_value, d.min_value
        FROM products p
            INNER JOIN languages l
                ON l.language_code = '${lang}'
            INNER JOIN product_translations pt 
                ON pt.product_id = p.id AND pt.language_id = l.id
            INNER JOIN producers prod
                ON prod.id = p.producer_id
            INNER JOIN category_translations ct
                ON ct.category_id = p.category_id AND ct.language_id = l.id
            LEFT JOIN discounts d 
                ON d.product_id = p.id AND d.discount_type_id = 1 AND d.validity::tsrange @> localtimestamp AND is_active = true
            WHERE p.id IN (${products.map(item => `${item}`).join(', ')})
        ORDER BY p.id ASC
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

module.exports = {
    GetCategories,
    GetProducers,
    GetProducts,
    GetCartProducts,
    GetCartProducts,
    GetProductByID,
    CreateOrder,
    GetNews,
    GetBanners,
    GetWishList
}