const database = require("../db/index");
const {status} = require("../utils/status");
const {OrderGenerator} = require("../pdfmaker/pdf.js");


const GetCategories = async (req, res) =>{
    const {lang} = req.params
    const query_text = `
        SELECT ct.name, c.id, (SELECT COUNT(*) FROM products p WHERE p.main_category_id = ct.category_id)::integer AS count,
        (SELECT COUNT(p.id) FROM products p WHERE p.recomended = true AND p.main_category_id = c.id)::integer AS recomended, 
        (SELECT COUNT(p.id) FROM products p WHERE p.new_in_come = true AND p.main_category_id = c.id)::integer AS new_in_come,
        (SELECT COUNT(p.id) FROM products p 
            INNER JOIN discounts d
                ON d.product_id = p.id AND d.discount_type_id = 1 AND validity::tsrange @> localtimestamp AND d.is_active = true
            WHERE p.main_category_id = c.id
        )::integer AS discount,
        c.destination,
        (SELECT json_agg(ca) FROM (SELECT ctt.name, cc.id 
            FROM categories cc
            INNER JOIN languages l
                ON l.language_code = '${lang}'    
            INNER JOIN category_translations ctt
                ON ctt.category_id = cc.id AND ctt.language_id = l.id 
        WHERE cc.main_category_id = c.id
          )ca) AS sub
        FROM categories c
            INNER JOIN languages l
                ON l.language_code = '${lang}'    
            INNER JOIN category_translations ct
                ON ct.category_id = c.id AND ct.language_id = l.id 
            
        WHERE c.main_category_id IS NULL
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
        SELECT prod.id, prod.name, prod.destination, (SELECT COUNT(*) FROM products p WHERE p.producer_id = prod.id)::integer AS count,
        (SELECT COUNT(p.id) FROM products p WHERE p.recomended = true AND p.producer_id = prod.id)::integer AS recomended, 
        (SELECT COUNT(p.id) FROM products p WHERE p.new_in_come = true AND p.producer_id = prod.id)::integer AS new_in_come,
        (SELECT COUNT(p.id) FROM products p 
            INNER JOIN discounts d
                ON d.product_id = p.id AND d.discount_type_id = 3 AND validity::tsrange @> localtimestamp
            WHERE p.producer_id = prod.id
        )::integer AS discount
         FROM producers prod
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
    const {page, limit,  search, category_id, producer_id,min_price, max_price, 
            sort_column, sort_direction, main_category_id, recomended, new_in_come, discounts, product_id } = req.query;
    const {lang} = req.params
    let offSet = ``
    if(page && limit){
        offSet = ` OFFSET  ${(page-1)*limit} LIMIT ${limit}`
    }
    let wherePart = ``
    if(search){
        wherePart += ` AND (pt.name ~* '${search}' OR pt.description ~* '${search}')`
    }

    let categories = []
    try {
        categories = JSON.parse(category_id)
    } catch (e) {
        console.log(e, "---categories")
    }
    console.log(categories)
    if(categories.length > 0){
        wherePart += ` AND  p.sub_category_id IN ( ${categories?.map(item => `${item}`).join(',')} )`
    }

    if(main_category_id){
        wherePart += ` AND p.main_category_id = ${main_category_id}`
    }
    
    let producers = []
    try {
        producers = JSON.parse(producer_id)
    } catch (e) {
        console.log(e, "---producers")
    }
    if(producers.length > 0){
        wherePart += ` AND p.producer_id IN ( ${producers?.map(item => `${item}`).join(',')} )`
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
        wherePart += ` AND p.recomended = ${recomended}`
    }
    if(new_in_come){
        wherePart += ` AND p.new_in_come = ${new_in_come}`
    }
    if(discounts){
        if(discounts == "true" || discounts == true){
            wherePart += ` AND d.discount_value IS NOT NULL `;
        }else if(discounts == false){
            wherePart += ` AND d.discount_value IS NULL`
        }
    }
    if(product_id){
        wherePart += ` AND p.id NOT IN (${product_id})`
    }
    const query_text = `
        SELECT 
            (SELECT COUNT(*) 
                FROM products p
                        LEFT JOIN languages l
                            ON l.language_code = '${lang}'
                        INNER JOIN product_translations pt 
                            ON pt.product_id = p.id AND pt.language_id = l.id
                        INNER JOIN producers prod
                            ON prod.id = p.producer_id
                        LEFT JOIN category_translations ct
                            ON ct.category_id = p.main_category_id AND ct.language_id = l.id
                        LEFT JOIN discounts d 
                            ON d.product_id = p.id AND d.discount_type_id = 1 AND d.validity::tsrange @> localtimestamp AND d.is_active = true
                    WHERE p.id > 0 ${wherePart}
            ),

                (SELECT json_agg(pro) FROM (
                    SELECT p.id::int, p.price::text, p.stock, d.discount_value, d.min_value, 
                        pt.name, SUBSTRING(pt.description, 1, 30) AS description, p.recomended, p.new_in_come, ct.name AS category_name, prod.name AS producer_name,
                        prod.id AS producer_id, ct.category_id AS category_id, 
                            (SELECT pi.destination FROM product_images pi WHERE pi.product_id = p.id LIMIT 1) AS destination

                    FROM products p
                        LEFT JOIN languages l
                            ON l.language_code = '${lang}'
                        INNER JOIN product_translations pt 
                            ON pt.product_id = p.id AND pt.language_id = l.id
                        INNER JOIN producers prod
                            ON prod.id = p.producer_id
                        LEFT JOIN category_translations ct
                            ON ct.category_id = p.main_category_id AND ct.language_id = l.id
                        LEFT JOIN discounts d 
                            ON d.product_id = p.id AND d.discount_type_id = 1 AND d.validity::tsrange @> localtimestamp AND d.is_active = true
                    WHERE p.id > 0 ${wherePart}
                    ORDER BY ${column} ${direction}
                    ${offSet}
                    )pro) AS products
    `
    try {
        // console.log(query_text)
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
        SELECT p.id::int, p.price::text, p.stock, p.destination, p.main_category_id AS category_id, p.producer_id, pt.name, pt.description, 
        prod.name AS producer_name, concat (ct.name, '/', ctt.name) AS category_name, d.discount_value, d.min_value, p.recomended, p.new_in_come,
        (SELECT json_agg(img) FROM (
            SELECT destination 
            FROM product_images pi
            WHERE pi.product_id = ${id}
        )img) AS images
        FROM products p
            INNER JOIN languages l
                ON l.language_code = '${lang}'
            INNER JOIN product_translations pt 
                ON pt.product_id = p.id AND pt.language_id = l.id
            INNER JOIN producers prod
                ON prod.id = p.producer_id
            INNER JOIN category_translations ct
                ON ct.category_id = p.main_category_id AND ct.language_id = l.id
            LEFT JOIN category_translations ctt
                ON ctt.category_id = p.sub_category_id AND ctt.language_id = l.id
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
        SELECT p.id::int, p.price::text, p.stock, p.destination, p.main_category_id, p.producer_id, pt.name, pt.description, 
        prod.name AS producer_name, ct.name AS category_name, d.discount_value, d.min_value
        FROM products p
            INNER JOIN languages l
                ON l.language_code = '${lang}'
            INNER JOIN product_translations pt 
                ON pt.product_id = p.id AND pt.language_id = l.id
            INNER JOIN producers prod
                ON prod.id = p.producer_id
            INNER JOIN category_translations ct
                ON ct.category_id = p.main_category_id AND ct.language_id = l.id
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
    const {products, coupon, phone, address, user_id, name, comment, paymant_id} = req.body;
    // console.log(req.body)
    if(!products?.length){
        return res.status(status.success).send("free cart")
    }
    const query_text = `
        SELECT p.id, p.price, p.stock, p.destination, p.main_category_id, p.producer_id, pt.name, pt.description, 
            prod.name AS producer_name, ct.name AS category_name, d.discount_value, d.min_value
        FROM products p
            INNER JOIN languages l
                ON l.language_code = '${lang}'
            LEFT JOIN product_translations pt 
                ON pt.product_id = p.id AND pt.language_id = l.id
            LEFT JOIN producers prod
                ON prod.id = p.producer_id
            LEFT JOIN category_translations ct
                ON ct.category_id = p.main_category_id AND ct.language_id = l.id
            LEFT JOIN discounts d 
                ON d.product_id = p.id AND d.discount_type_id = 1 AND d.validity::tsrange @> localtimestamp AND is_active = true
            WHERE p.id IN (${products?.map(item => `${item.id}`).join(', ')})
        `
    try {
        const {rows} = await database.query(query_text, [])
        const cart = rows;
        let totalPrice = 0
        for(let i = 0; i<cart.length; i++){
            for(let j= 0; j<cart.length; j++){
                if(cart[i]?.id == products[j]?.id){
                    cart[i].quantity = products[j].count
                }
            }
        }
        for(let i = 0; i<cart.length; i++){
            
            if(cart[i].discunt_value){
                totalPrice = totalPrice +  parseFloat(cart[i].price)*(100-(+cart[i].discount_value))*0.01*(+cart[i].quantity)
            }else{
                totalPrice = totalPrice +  parseFloat(cart[i].price)*(+cart[i].quantity)
            }
        }
        // console.log(totalPrice)
        let discount = {}
        if(coupon){
            try{
                discount = await database.query(`SELECT * FROM discounts WHERE discount_type_id = 4 AND validity:: tsrange @> localtimestamp AND coupon = '${coupon}' AND is_active = true`, [])
            }catch(e){
                throw(e)
            }
        }else{
            try {
                discount = await database.query(`SELECT * FROM discounts WHERE discount_type_id = 3 AND validity:: tsrange @> localtimestamp AND is_active = true AND min_value < ${totalPrice}`, [])                
            } catch (e) {
                throw(e)
            }
        }

        if(discount?.rows[0]){
            totalPrice = totalPrice * (100-(+discount.rows[0].discount_value))*0.01
        }
       
        const order_query = `
            WITH inserted AS (
                INSERT INTO orders(coupon, phone, address, user_id, total_price, discount_id, name, comment, paymant_id)
                VALUES (${coupon ? `'${coupon}'` : `null`}, '${phone}', '${address}', ${user_id ? `${user_id}` : null}, 
                    ${totalPrice}, ${discount?.rows[0] ? discount?.rows[0].id : `null`}, '${name}', '${comment}', ${paymant_id})
                RETURNING *
            ), inserted_items AS (
                INSERT INTO order_items(product_id, quantity, price, order_id)
                VALUES ${cart.map(item => `(${item.id}, ${item.quantity}, ${item.price}, (SELECT id FROM inserted))`).join(', ')}
            ) SELECT id FROM inserted
        `
        
        try {
            const j = await database.query(order_query, [])
            // console.log("After third query")
            // console.log(j)
            const id = j?.rows[0]?.id;
            // try {
            //     const s_query_text = `
            //     SELECT o.id, o.phone, o.address, o.name, to_char(o.created_at, 'DD.MM.YYYY HH24:MI') AS created_at,
            //         o.total_price, o.coupon, o.discount_id, d.discount_value, o.paymant_id,
            //         (SELECT json_agg(orde) FROM (
            //             SELECT p.id, p.name, oi.price, oi.quantity, d.discount_value, pt.name AS name_ru
            //             FROM order_items oi
            //                 INNER JOIN products p 
            //                     ON p.id = oi.product_id
            //                 INNER JOIN product_translations pt
            //                     ON pt.product_id = p.id AND pt.language_id = 2
            //                 LEFT JOIN discounts d
            //                     ON d.product_id = oi.product_id AND validity ::tsrange @> o.created_at
            //                 WHERE oi.order_id = o.id
            //         )orde) AS order_items
            //     FROM orders o
            //         LEFT JOIN discounts d
            //             ON d.id = o.discount_id
            //         WHERE o.id = ${id}
            //     `
            //     const s = await database.query(s_query_text, [])
            //     // console.log(s.rows[0])
            //     const data = s.rows[0]
            //     if(data){
            //         res.setHeader('Content-type', 'application/pdf');
            //         res.setHeader('Access-Control-Allow-Origin', '*');
            //         res.setHeader('Content-disposition', 'attachment; filename=Untitled.pdf');
            //         const response = await OrderGenerator(data)
            //         return res.status(status.success).send(response)
            //     }
            // } catch (e) {
            //     console.log(e)
            //     return res.status(status.success).send(true)
            // }
            return res.status(status.success).json({rows:id})
        } catch (e) {
            console.log(e)
            return res.status(status.error).send(false)
        }

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
                SELECT n.id, to_char(n.created_at, 'DD-MM-YYYY') AS created_at, n.destination, nt.title, SUBSTRING(nt.article, 1, 50) AS article
                FROM news n
                INNER JOIN languages l
                    ON l.language_code = '${lang}'
                INNER JOIN news_descriptions nt
                    ON nt.news_id = n.id AND nt.language_id = l.id
                ORDER BY n.id DESC
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

const GetNewsByID = async (req, res) =>{
    const {id, lang} = req.params;
    const query_text = `
        SELECT to_char(n.created_at, 'DD-MM-YYYY') AS created_at, n.destination, nt.title, SUBSTRING(nt.article, 1, 50) AS article
        FROM news n
        INNER JOIN languages l
            ON l.language_code = '${lang}'
        INNER JOIN news_descriptions nt
            ON nt.news_id = n.id AND language_id = l.id
        WHERE n.id = ${id} 
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
    const {id} = req.params;
    const query_text = `
        SELECT * FROM banner WHERE place_id = ${id} 
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
    const { lang} = req.params;
    const {products} = req.query
    let obj = []
    try {
        obj =  await JSON.parse(products);
    } catch (e) {
        console.log(e)
    }
    console.log(obj)
    if(!obj.length){
        console.log("if")
        return res.status(status.success).json({rows:null})
    }
    const query_text = `
    SELECT p.id::int, p.price::text, p.stock, p.destination, p.main_category_id, p.producer_id, pt.name, pt.description, 
        prod.name AS producer_name, ct.name AS category_name, d.discount_value, d.min_value
        FROM products p
            INNER JOIN languages l
                ON l.language_code = '${lang}'
            INNER JOIN product_translations pt 
                ON pt.product_id = p.id AND pt.language_id = l.id
            INNER JOIN producers prod
                ON prod.id = p.producer_id
            INNER JOIN category_translations ct
                ON ct.category_id = p.main_category_id AND ct.language_id = l.id
            LEFT JOIN discounts d 
                ON d.product_id = p.id AND d.discount_type_id = 1 AND d.validity::tsrange @> localtimestamp AND is_active = true
            WHERE p.id IN (${obj.map(item => `${item.id}`).join(', ')})
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

const AddtoSubscription = async (req, res) =>{
    const {phone} = req.body;
    const {lang} = req.params
    const query_text = `
        INSERT INTO subscriptions(phone) VALUES ('${phone}')
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        if(e.message.includes("duplicate key value violates unique constraint")){
            let message = {}
            message["phone"] = `${lang==='ru' ? `Номер уже подписан` : lang === 'en' ? `Phone already subscribed` : `Belgi eýýäm ývazgyda`}`
            return res.status(status.conflict).send({error:message})
        }
        return res.status(status.error).send(false)
    }
}

const GetCoupon = async (req, res) =>{
    const {coupon} = req.query
    const query_text = `
        SELECT discount_value FROM discounts WHERE coupon = '${coupon}' AND discount_type_id = 4
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({"rows":rows[0] ? rows[0] : null })
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
} 

const GetProductComments = async (req, res) =>{
    const {id} = req.params;
    const {page, limit} = req.query
    let offSet = ``
    if(page && limit){
        offSet = `OFFSET ${page*limit} LIMIT ${limit}`
    }
    const query_text = `
        SELECT (
            SELECT COUNT(pc.id) FROM product_comments pc WHERE pc.product_id = ${id} AND pc.main_comment_id IS NULL
        )::integer AS count, (
            SELECT json_agg(com) FROM (
                SELECT pc.comment, u.full_name, to_char(pc.created_at, 'DD.MM.YYYY HH24:MI') AS created_at, pc.id::integer,
                    (
                    SELECT json_agg(sd) FROM (
                        SELECT pcc.comment, u.full_name, to_char(pcc.created_at, 'DD.MM.YYYY HH24:MI') AS created_at
                        
                        FROM product_comments pcc
                        INNER JOIN users u
                            ON u.id = pcc.user_id 
                        WHERE pcc.product_id = ${id} AND pcc.main_comment_id = pc.id AND pcc.is_active = true

                        ) sd) AS sub_comments
                FROM product_comments pc
                INNER JOIN users u
                    ON u.id = pc.user_id 
                WHERE pc.product_id = ${id} AND pc.main_comment_id IS NULL AND pc.is_active = true
                ${offSet}
        )com) AS comments
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetShopData = async (req, res) =>{
    const {lang} = req.params
    const query_text = `
        SELECT phone1, phone2, email, address_${lang} AS address FROM shop_data
    `
    try {
        // console.log("I am in trye")
        const {rows} = await database.query(query_text, [])
        // console.log(rows)
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GeneratePdf = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        SELECT o.id, o.phone, o.address, o.name, to_char(o.created_at, 'DD.MM.YYYY HH24:MI') AS created_at,
            o.total_price, o.coupon, o.discount_id, d.discount_value, o.paymant_id,
            (SELECT json_agg(orde) FROM (
                SELECT p.id, p.name, oi.price, oi.quantity, d.discount_value, pt.name AS name_ru
                FROM order_items oi
                    INNER JOIN products p 
                        ON p.id = oi.product_id
                    INNER JOIN product_translations pt
                        ON pt.product_id = p.id AND pt.language_id = 2
                    LEFT JOIN discounts d
                        ON d.product_id = oi.product_id AND validity ::tsrange @> o.created_at
                    WHERE oi.order_id = o.id
            )orde) AS order_items
        FROM orders o
            LEFT JOIN discounts d
                ON d.id = o.discount_id
            WHERE o.id = ${id}
    `
    try {
        const {rows} = await database.query(query_text, [])
        const data = rows[0]
        if(data){
            res.setHeader('Content-type', 'application/pdf');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-disposition', 'attachment; filename=Untitled.pdf');
            const response = await OrderGenerator(data)
            return res.status(status.success).send(response)
        }else{
            return res.status(404).send(false)
        }
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetOrdersMobile = async (req, res) =>{
    const {ord} = req.query;
    let arr = []
    try {
        arr = JSON.parse(ord)
    } catch (e) {
        
    }
    if(!arr.length){
        return res.status(status.success).json({rows:null})
    }
    const query_text = `
        SELECT o.id, o.phone, o.address, o.name, to_char(o.created_at, 'YYYY-MM-DD HH24:MI') AS created_at,
        o.total_price, o.coupon, o.discount_id, d.discount_value
        FROM orders o
        LEFT JOIN discounts d
            ON d.id = o.discount_id
        WHERE o.id IN (${ord.map(item => item.id).join(', ')})
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetOrderById = async (req, res) =>{
    const {lang, id} = req.params
    const query_text = `
    SELECT p.id::integer, oi.price, oi.quantity, d.discount_value::integer, pt.name, p.destination, ct.name AS category_name, prod.name AS producer_name
        FROM order_items oi
            INNER JOIN languages l
                ON l.language_code = '${lang}'
            INNER JOIN products p 
                ON p.id = oi.product_id
            INNER JOIN product_translations pt
                ON pt.product_id = p.id AND pt.language_id = l.id
            INNER JOIN category_translations ct 
                ON ct.category_id = p.main_category_id AND ct.language_id = l.id
            INNER JOIN producers prod 
                ON prod.id = p.producer_id
            INNER JOIN orders o
                ON o.id = oi.order_id
            LEFT JOIN discounts d
                ON d.product_id = oi.product_id AND validity ::tsrange @> o.created_at
            WHERE o.id = ${id} 
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e) 
        return res.status(status.error).send(false)
    }
}

const GetTestimonials = async (req, res) =>{
    const query_text = `
        SELECT * FROM testimonial
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetVideos = async (req, res) =>{
    const {lang} = req.params;
    const query_text = `
        SELECT v.poster, v.video, vt.title 
        FROM videos v 
        INNER JOIN languages l
            ON l.langauge_code = '${lang}'
        INNER JOIN video_titles vt
            ON vt.video_id = v.id AND vt.language_id = l.id
        WHERE v.video IS NOT NULL AND v.poster IS NOT NULL
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.success).send(false)
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
    GetWishList,
    GetNewsByID,
    AddtoSubscription,
    GetCoupon,
    GetProductComments,
    GetShopData,
    GeneratePdf,
    GetOrdersMobile,
    GetOrderById,
    GetTestimonials,
    GetVideos
}