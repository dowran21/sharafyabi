const database = require('../db/index')
const {status} = require('../utils/status')
const {ComparePassword, GenerateAdminAccessToken, GenerateAdminRefreshToken} = require('../utils/index')
const fs = require('fs')
require('dotenv').config();
const {SendSMS} = require('../utils/sms')

const admin = require("firebase-admin");
// const { query } = require('../db/index');
const serviceAccount = require(process.env.PATH_TO_PUSH_JSON)
const FIREBASE_DATABASE_URL = "https://sharafyabi-4293c-default-rtdb.firebaseio.com"
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseUrl: FIREBASE_DATABASE_URL
})


const Login = async (req, res) =>{
    const {phone, password} = req.body
    const query_text  =`
        SELECT * FROM users WHERE phone = $1 AND role_id = 1
    `
    try {
        const {rows} = await database.query(query_text, [phone])
        const user = rows[0]
        if(!user){
            let message = {}
            message["phone"] = `Телефон или пароль неправильный`
            return res.status(status.bad).send({error:message})
        }else{
            let compare = await ComparePassword(password, user.password)
            if(compare){
                const data = {"id":user.id, "full_name":user.full_name, "phone":user.phone, "role_id":user.role_id};
                console.log(data)
                
                const access_token = await GenerateAdminAccessToken(data);
                const refresh_token = await GenerateAdminRefreshToken(data);
                return res.status(status.success).json({data, access_token, refresh_token});
            }else{
                let message = {}
                message["phone"] = `Телефон или пароль неправильный`
                return res.status(status.bad).send({error:message})
            }
        } 
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }

}

const LoadAdmin = async (req, res) =>{
    const user_id = req.user.id
    try {
        const {rows} = await database.query(`SELECT * FROM users WHERE id = ${user_id}`, [])
        const user = rows[0]
        const data = {"id":user.id, "phone":user.phone, "email":user.email, "role_id":user.role_id}
        const access_token = await GenerateAdminAccessToken(data);
        return res.status(status.success).json({"access_token":access_token, "data":data})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddCategory = async (req, res) =>{
    /************
     name_tm = asdas,
     name_ru = asdas, 
     name_en = asdasd,
     id = 1
     ***********/
    const {name_tm, name_ru, name_en} = req.body;

    const query_text = ` WITH inserted AS (
            INSERT INTO categories(name) VALUES('${name_ru}') RETURNING *
        ), inserted_trans1 AS (
            INSERT INTO category_translations(language_id, category_id, name) VALUES 
            (1, (SELECT id FROM inserted), '${name_tm}'), 
            (2, (SELECT id FROM inserted), '${name_ru}'),
            (3, (SELECT id FROM inserted), '${name_en}')
        ) SELECT id FROM inserted `
    try {
        const {rows} = await database.query(query_text, [])
        try {
            const s_query = `
                SELECT c.id, ct.name AS name_tm, ctt.name AS name_ru, cttt.name AS name_en
                FROM categories c
                    INNER JOIN category_translations ct 
                        ON ct.category_id = c.id AND ct.language_id = 1
                    INNER JOIN category_translations ctt 
                        ON ctt.category_id = c.id AND ctt.language_id = 2
                    INNER JOIN category_translations cttt 
                        ON cttt.category_id = c.id AND cttt.language_id = 3
                WHERE c.id = ${rows[0].id}
            `
            const k = await database.query(s_query, [])
            return res.status(status.success).json({"rows":k.rows[0]})
        } catch (e) {
            console.log(e)
            return res.status(status.error).send(false)
        }
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const UpdateCategory = async (req, res) =>{
    const {name_tm, name_ru, name_en} = req.body;
    const {id} = req.params
    const query_text = `
        with updated1 AS (
            UPDATE category_translations SET name = '${name_tm}' WHERE language_id = 1 AND category_id = ${id}
        ), updated2 AS (
            UPDATE category_translations SET name = '${name_ru}' WHERE language_id = 2 AND category_id = ${id}
        ) UPDATE category_translations SET name = '${name_en}' WHERE language_id = 3 AND category_id = ${id}

    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const DeleteCategory = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        DELETE FROM categories WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddSubCategory = async (req, res) =>{
    const {id} = req.params;
    const {name_tm, name_ru, name_en} = req.body;

    const query_text = ` WITH inserted AS (
            INSERT INTO categories(name, main_category_id) VALUES('${name_ru}', ${id}) RETURNING *
        ), inserted_trans1 AS (
            INSERT INTO category_translations(language_id, category_id, name) VALUES 
            (1, (SELECT id FROM inserted), '${name_tm}'), 
            (2, (SELECT id FROM inserted), '${name_ru}'),
            (3, (SELECT id FROM inserted), '${name_en}')
        ) SELECT id FROM inserted `
    try {
        const {rows} = await database.query(query_text, [])
        try {
            const s_query = `
                SELECT c.id, ct.name AS name_tm, ctt.name AS name_ru, cttt.name AS name_en, c.main_category_id
                FROM categories c
                    INNER JOIN category_translations ct 
                        ON ct.category_id = c.id AND ct.language_id = 1
                    INNER JOIN category_translations ctt 
                        ON ctt.category_id = c.id AND ctt.language_id = 2
                    INNER JOIN category_translations cttt 
                        ON cttt.category_id = c.id AND cttt.language_id = 3
                WHERE c.id = ${rows[0].id}
            `
            const k = await database.query(s_query, [])
            return res.status(status.success).json({"rows":k.rows[0]})
        } catch (e) {
            console.log(e)
            return res.status(status.error).send(false)
        }
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetCategories = async (req, res) =>{
    const query_text = `
        SELECT c.id, ct.name AS name_tm, ctt.name AS name_ru, cttt.name AS name_en, c.destination,
        (SELECT json_agg(cat) FROM (
            SELECT cc.id, ct.name AS name_tm, ctt.name AS name_ru, cttt.name AS name_en, cc.main_category_id
            FROM categories cc
                INNER JOIN category_translations ct 
                    ON ct.category_id = cc.id AND ct.language_id = 1
                INNER JOIN category_translations ctt 
                    ON ctt.category_id = cc.id AND ctt.language_id = 2
                INNER JOIN category_translations cttt 
                    ON cttt.category_id = cc.id AND cttt.language_id = 3
            WHERE cc.main_category_id = c.id 
        )cat) AS sub
        FROM categories c
            INNER JOIN category_translations ct 
                ON ct.category_id = c.id AND ct.language_id = 1
            INNER JOIN category_translations ctt 
                ON ctt.category_id = c.id AND ctt.language_id = 2
            INNER JOIN category_translations cttt 
                ON cttt.category_id = c.id AND cttt.language_id = 3
        WHERE c.main_category_id IS NULL
        ORDER BY c.id ASC

            `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false
            )   
    }
}

const AddProducer = async (req, res) =>{
    const {name} = req.body;
    const query_text = `
        INSERT INTO producers(name) VALUES ('${name}') RETURNING *
    `
    try {
        const {rows} = await database.query(query_text, [])
        res.status(status.success).json({"rows":rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const UpdateProducer = async (req, res) =>{
    const {id} = req.params;
    const {name} = req.body;
    const query_text = `
        UPDATE producers SET name = '${name}' WHERE id = ${id}
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const DeleteProducer = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        DELETE FROM producers WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetProducers = async (req, res) =>{
    const query_text = `
        SELECT * FROM producers ORDER BY id ASC
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetSelectProducers = async (req, res) =>{
    const query_text = `
        SELECT id AS value, name AS label FROM producers
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddProducerImage = async (req, res) =>{
    const {id} = req.params;
    const file = req.file
    console.log(file);
    try {
        await database.query(`UPDATE producers SET destination = '${file.path}' WHERE id = ${id}`, [])
        try {
            const {rows} = await database.query(`SELECT * FROM producers WHERE id = ${id}`)
            return res.status(status.success).json({"rows":rows[0]})
        } catch (e) {
            console.log(e)
            return res.status(status.error).send(false)
        }
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddProduct = async (req, res) =>{
    const {main_category_id, sub_category_id, producer_id, stock  , price, name_tm, name_ru, name_en, 
        description_tm, description_ru, description_en} = req.body;

    const query_text = `
        WITH inserted AS (
            INSERT INTO products(main_category_id, producer_id, price, stock, name, sub_category_id )
            VALUES (${main_category_id}, ${producer_id}, ${price}, ${stock}, '${name_ru}', ${sub_category_id})
            RETURNING *
        ), inserted_trans AS (
            INSERT INTO product_translations(product_id, language_id, name, description)
            VALUES ((SELECT id FROM inserted), 1, '${name_tm}', '${description_tm}'), 
                ((SELECT id FROM inserted), 2, '${name_ru}', '${description_ru}'),
                ((SELECT id FROM inserted), 3, '${name_en}', '${description_en}') 
        ) SELECT id FROM inserted
      `       
    try {
        const {rows} = await database.query(query_text, []);
        try {
            const s_query = `
                SELECT p.id, p.price, p.stock, p.destination, p.main_category_id, p.producer_id, pt.name AS name_tm, pt.description AS description_tm,
                    ptt.name AS name_ru, ptt.description AS description_ru, pttt.name AS name_en, pttt.description AS description_en, p.sub_category_id,
                    prod.name AS producer_name, ct.name AS category_name
                    FROM products p
                        LEFT JOIN product_translations pt 
                            ON pt.product_id = p.id AND pt.language_id = 1
                        LEFT JOIN product_translations ptt 
                            ON ptt.product_id = p.id AND ptt.language_id = 2
                        LEFT JOIN product_translations pttt 
                            ON pttt.product_id = p.id AND pttt.language_id = 3
                        LEFT JOIN producers prod
                            ON prod.id = p.producer_id
                        LEFT JOIN category_translations ct
                            ON ct.category_id = p.main_category_id AND ct.language_id = 2
                    WHERE p.id = ${rows[0].id}`
            const s = await database.query(s_query, [])
            // console.log(s.rows)
            return res.status(status.success).json({rows:s.rows[0]})
        } catch (e) {
            console.log(e)
            return res.status(status.error).send(False)
        }
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddProductImage = async (req, res) =>{
    const {id} = req.params;
    const files = req.files
    console.log(req.files)
    try {
        // await database.query(`UPDATE products SET destination = '${file.path}' WHERE id = ${id}`, [])
        // if(files?.length){
        //     return res.status(status.error).send(false)
        // }
        const query_text = `
            INSERT INTO product_images(product_id, destination) VALUES ${files.map(item => `(${id}, '${item.path}')`).join(',')}
        `
        console.log(query_text)
        await database.query(query_text, [])
        return res.status(status.success).send(true)

        // try {
        //     const s_query = `
        //     SELECT p.id, p.price, p.stock, p.destination, p.main_category_id, p.producer_id, pt.name AS name_tm, pt.description AS description_tm,
        //     ptt.name AS name_ru, ptt.description AS description_ru, pttt.name AS name_en, pttt.description AS description_en,
        //     prod.name AS producer_name, ct.name AS category_name
        //     FROM products p
        //         LEFT JOIN product_translations pt 
        //             ON pt.product_id = p.id AND pt.language_id = 1
        //         LEFT JOIN product_translations ptt 
        //             ON ptt.product_id = p.id AND ptt.language_id = 2
        //         LEFT JOIN product_translations pttt 
        //             ON pttt.product_id = p.id AND pttt.language_id = 3
        //         LEFT JOIN producers prod
        //             ON prod.id = p.producer_id
        //         LEFT JOIN category_translations ct
        //             ON ct.category_id = p.main_category_id AND ct.language_id = 2
        //     WHERE p.id = ${id}
        //     `
        //     const {rows} = await database.query(s_query, [])
        //     return res.status(status.success).json({"rows":rows[0]})
        // } catch (e) {
        //     console.log(e)
        //     return res.status(status.error).send(false)
        // }
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetProductImages = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        SELECT * FROM product_images WHERE product_id = ${id}
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const DeleteProductImage = async (req, res) =>{
    const {id} = req.params;
    const {path} = req.query;
    try {
        fs.unlinkSync(`./${path}-mini.webp`)
        fs.unlinkSync(`./${path}-big.webp`)
        fs.unlinkSync(`./${path}-large.webp`)
        try {
            await database.query(`DELETE FROM product_images WHERE id = ${id}`)
            return res.status(status.success).send(true)
        } catch (e) {
            console.log(e)
            return res.status(status.error).send(false)
        }
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddVideoInformation = async (req, res) =>{
    const {title_ru, title_en, title_tm} = req.body;
    const query_text = `
        WITH inserted AS (
            INSERT INTO videos(title) VALUES ('${title_ru}')
            RETURNING *
        ), inserted_trans AS (
            INSERT INTO video_titles(title, language_id, video_id) 
            VALUES ('${title_tm}', 1, (SELECT id FROM inserted)), ('${title_ru}', 2, (SELECT id FROM inserted)), ('${title_en}', 3, (SELECT id FROM inserted)))
            SELECT id FROM inserted
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddVideoFile = async (req, res) =>{
    const {id} = req.params
    const file = req.file
    // console.log(file)
    const query_text = `
        UPDATE videos SET video = '${file.path}' WHERE id = ${id}
        `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddVideoPoster = async (req, res) =>{
    const {id} = req.params;
    const file = req.file
    const query_text = `
        UPDATE videos SET poster = '${file.path}' where id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        return res.status(status.error).send(false)
    }
}

const DeleteVideo = async (req, res) =>{
    const {id} = req.params;
    const {video, poster} = req.query;
    try {
        fs.unlinkSync(`./${poster}-mini.webp`);
        fs.unlinkSync(`./${poster}-big.webp`);
        fs.unlinkSync(`./video`)
    } catch (e) {
        
    } 
    try {
        await database.query(`DELETE FROM videos WHERE id = ${id}`, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddNews = async (req, res) =>{
    const {title_tm, title_ru, title_en, article_tm, article_ru, article_en} = req.body
    const query_text = `
        WITH inserted AS (
            INSERT INTO news(title) 
            VALUES('${title_ru}') RETURNING *
        ), inserted_description AS (
            INSERT INTO news_descriptions(news_id, title, article, language_id)
            VALUES ((SELECT id FROM inserted), '${title_tm}', '${article_tm}', 1),
            ((SELECT id FROM inserted), '${title_ru}', '${article_ru}', 2),
            ((SELECT id FROM inserted), '${title_en}', '${article_en}', 3)
        ) SELECT id FROM inserted
    `
    try {
        const {rows} = await database.query(query_text, [])
        const s_query = `
            SELECT n.id, nd.title AS title_tm, n.destination, nd.article AS article_tm, ndd.title AS title_ru, ndd.article AS article_ru, 
                nddd.title AS title_en, nddd.title AS title_en, to_char(n.created_at, 'YYYY/MM/DD' ) AS created_at
            FROM news n
                INNER JOIN news_descriptions nd
                    ON nd.news_id = n.id AND nd.language_id = 1
                INNER JOIN news_descriptions ndd
                    ON ndd.news_id = n.id AND ndd.language_id = 2
                INNER JOIN news_descriptions nddd
                    ON nddd.news_id = n.id AND nddd.language_id = 3
            WHERE n.id = ${rows[0].id}
        `
        const k = await database.query(s_query, [])
        return res.status(status.success).json({rows:k.rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetNews = async (req, res) =>{
    const query_text = `
        SELECT (
            SELECT COUNT (*) FROM news n
        ), (SELECT json_agg(ne) FROM (
            SELECT n.id, nd.title AS title_tm, n.destination, nd.article AS article_tm, ndd.title AS title_ru, ndd.article AS article_ru, 
                nddd.title AS title_en, nddd.article AS article_en, to_char(n.created_at, 'DD.MM.YYYY' ) AS created_at
            FROM news n
                INNER JOIN news_descriptions nd
                    ON nd.news_id = n.id AND nd.language_id = 1
                INNER JOIN news_descriptions ndd
                    ON ndd.news_id = n.id AND ndd.language_id = 2
                INNER JOIN news_descriptions nddd
                    ON nddd.news_id = n.id AND nddd.language_id = 3
                ORDER BY n.id ASC
        )ne) AS news
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e);
        return res.status(status.error).send(false)
    }
}

const AddNewsImage = async (req, res) =>{
    const {id} = req.params;
    const file = req.file
    const query_text = `
        UPDATE news SET destination = '${file.path}' WHERE id = ${id} RETURNING *
    `
    try {
        const {rows} = await database.query(query_text, [])
        console.log(query_text)
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const UpdateNews = async (req, res) =>{
    const {title_tm, title_ru, title_en, article_tm, article_ru, article_en} = req.body
    const {id} = req.params;
    const query_text = `
        WITH updated AS (UPDATE news_descriptions SET title = '${title_tm}', article = '${article_tm}' WHERE news_id = ${id} AND language_id = 1),
            update_ru AS (UPDATE news_descriptions SET title = '${title_ru}', article = '${article_ru}' WHERE news_id = ${id} AND language_id = 2)
            UPDATE news_descriptions SET title = '${title_en}', article = '${article_en}' WHERE news_id = ${id} AND language_id = 3    
        `
    try {
        console.log(query_text)
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetProducts = async (req, res) =>{
    const {page, limit, search, category_id, producer_id, sort_column, sort_direction} = req.query;
    let offSet = ``
    if(page && limit){
        offSet = ` OFFSET  ${page*limit} LIMIT ${limit}`
    }
    let wherePart = ``
    if(search){
        wherePart += ` AND p.name ~* '${search}'`
    }
    if(category_id){
        wherePart += ` AND p.main_category_id = ${category_id}`
    }
    if(producer_id){
        wherePart += ` AND p.producer_id = ${producer_id}`
    }
    let col = ``
    if(sort_column){
        col = sort_column
    }else{
        col = "p.id"
    }
    let direct = ""
    if(sort_direction){
        direct = sort_direction
    }else{
        direct = "ASC"
    }
    const query_text = `
        SELECT 
            (SELECT COUNT(*) 
            FROM products p
                LEFT JOIN product_translations pt 
                    ON pt.product_id = p.id AND pt.language_id = 1
                LEFT JOIN product_translations ptt 
                    ON ptt.product_id = p.id AND ptt.language_id = 2
                LEFT JOIN product_translations pttt 
                    ON pttt.product_id = p.id AND pttt.language_id = 3
                LEFT JOIN producers prod
                    ON prod.id = p.producer_id
                LEFT JOIN category_translations ct
                    ON ct.category_id = p.main_category_id AND ct.language_id = 2
            WHERE p.id > 0 ${wherePart}
            ), 
            (SELECT json_agg(pro) FROM (
                SELECT p.id, p.price, p.stock, p.name, p.destination, p.main_category_id, p.producer_id, pt.name AS name_tm, pt.description AS description_tm,
                ptt.name AS name_ru, ptt.description AS description_ru, pttt.name AS name_en, pttt.description AS description_en, p.sub_category_id,
                prod.name AS producer_name, ct.name AS category_name, d.discount_value, p.recomended, p.new_in_come,
                d.id AS discount_id, to_char(lower(validity)::date, 'DD.MM.YYYY') AS low_val, to_char(upper(validity), 'DD.MM.YYYY') AS upper_val
                FROM products p
                    LEFT JOIN product_translations pt 
                        ON pt.product_id = p.id AND pt.language_id = 1
                    LEFT JOIN product_translations ptt 
                        ON ptt.product_id = p.id AND ptt.language_id = 2
                    LEFT JOIN product_translations pttt 
                        ON pttt.product_id = p.id AND pttt.language_id = 3
                    LEFT JOIN producers prod
                        ON prod.id = p.producer_id
                    LEFT JOIN category_translations ct
                        ON ct.category_id = p.main_category_id AND ct.language_id = 2
                    LEFT JOIN discounts d
                        ON d.product_id = p.id AND d.discount_type_id = 1 AND upper(validity) > localtimestamp AND is_active = true
                WHERE p.id > 0 ${wherePart}
                ORDER BY ${col} ${direct}, p.name ASC
                ${offSet}
            )pro) AS products
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({"rows":rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddCategoryImage = async (req, res) =>{
    const {id} = req.params;
    const file = req.file
    try {
        await database.query(`UPDATE categories SET destination = '${file.path}' WHERE id = ${id}`, [])
        try {
            const {rows} = await database.query(`SELECT * FROM categories WHERE id = ${id}`)
            return res.status(status.success).json({"rows":rows[0]})
        } catch (e) {
            console.log(e)
            return res.status(status.error).send(false)
        }
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const UpdateProduct = async (req, res) =>{
    const {id} = req.params
    const {main_category_id, producer_id, stock, price, name_tm, name_ru, name_en, sub_category_id,
        description_tm, description_ru, description_en} = req.body;
    const query_text = `
        WITH update_product AS (
            UPDATE products SET main_category_id = ${main_category_id}, sub_category_id = ${sub_category_id}, producer_id = ${producer_id}, 
                price = ${price}, stock = ${stock} WHERE id = ${id}
        ) INSERT INTO product_translations(product_id, language_id, name, description) 
        VALUES (${id}, 1, '${name_tm}', ${description_tm ? `'${description_tm}'` : null}), 
            (${id}, 2, '${name_ru}', ${description_ru ? `'${description_ru}'` : null}),
            (${id}, 3, '${name_en}', ${description_en ? `'${description_en}'` : null})
        ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description
            `
    try {
        console.log(query_text)
        await database.query(query_text, [])
        try {
            const s_query = `SELECT p.id, p.price, p.name, p.stock, p.destination, p.main_category_id, p.producer_id, pt.name AS name_tm, pt.description AS description_tm,
            ptt.name AS name_ru, ptt.description AS description_ru, pttt.name AS name_en, pttt.description AS description_en, p.sub_category_id,
            prod.name AS producer_name, ct.name AS category_name, p.recomended, p.new_in_come
            FROM products p
                LEFT JOIN product_translations pt 
                    ON pt.product_id = p.id AND pt.language_id = 1
                LEFT JOIN product_translations ptt 
                    ON ptt.product_id = p.id AND ptt.language_id = 2
                LEFT JOIN product_translations pttt 
                    ON pttt.product_id = p.id AND pttt.language_id = 3
                LEFT JOIN producers prod
                    ON prod.id = p.producer_id
                LEFT JOIN category_translations ct
                    ON ct.category_id = p.main_category_id AND ct.language_id = 2
            WHERE p.id = ${id}`
            const {rows} = await database.query(s_query, [])
            return res.status(status.success).json({rows:rows[0]})
        } catch (e) {
            console.log(e)
            return res.status(status.error).send(false)
        }
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddSale = async (req, res) =>{
    const {start_date, end_date, coupon, discount_type_id, discount_value, product_id, min_value} = req.body;
    console.log(req.body)
    const query_text = `
        INSERT INTO discounts(validity, discount_value, coupon, discount_type_id, product_id, min_value)
            VALUES ('[${start_date}, ${end_date}]',${discount_value}, 
                ${discount_type_id == 4 ? `'${coupon}'` : `null`}, 
                    ${discount_type_id}, ${discount_type_id == 1 ? `${product_id}` : `null`}, ${discount_type_id == 4 ? `null` : `${min_value}` } ) RETURNING *
    `
    try {
        const {rows} = await database.query(query_text, [])
        const s_query = `
            SELECT dt.name AS discount_name, d.id,  d.discount_value, d.coupon, d.discount_type_id, d.product_id, d.min_value, 
            lower(d.validity)::text AS low, upper(d.validity)::text AS upper, pt.name, (SELECT upper(d.validity) > localtimestamp) AS active, d.is_active
            FROM discounts d
                INNER JOIN discount_types dt
                    ON dt.id = d.discount_type_id
                LEFT JOIN product_translations pt 
                    ON pt.product_id = d.product_id AND pt.language_id = 2
                WHERE d.id = ${rows[0].id}
        `
        const s = await database.query(s_query, [])
        return res.status(status.success).json({rows:s?.rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetSales = async (req, res) =>{
    const query_text = `
        SELECT (
            SELECT COUNT(*) FROM discounts
        ), (SELECT json_agg(dis) FROM (
            SELECT dt.name AS discount_name, d.id,  d.discount_value, d.coupon, d.discount_type_id, d.product_id, d.min_value, 
                lower(d.validity)::text AS low, upper(d.validity)::text, pt.name, (SELECT upper(d.validity) > localtimestamp) AS active, d.is_active
                FROM discounts d
                    INNER JOIN discount_types dt
                        ON dt.id = d.discount_type_id
                    LEFT JOIN product_translations pt 
                        ON pt.product_id = d.product_id AND pt.language_id = 2
                ORDER BY d.id DESC
        )dis) AS discounts 
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const DeactivateSales = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        UPDATE discounts SET is_active = false WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const DeleteNews = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        DELETE FROM news WHERE id = ${id} 
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddBanner = async (req, res) =>{
    const {path_id, item_id} = req.body;
    const {id} = req.params
    const file = req.file
    console.log(path_id, item_id)
    try {
        const {rows} = await database.query(`INSERT INTO banner (destination, path_id, item_id, place_id) 
            VALUES ('${req.file.path}', ${path_id ? path_id : `null`}, ${item_id ? item_id : `null`}, ${id}) RETURNING *`, [])
        return res.status(status.success).json({"rows":rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetBanners = async (req, res) =>{
    const {id} = req.params
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

const DeleteBanner = async (req, res) =>{
    const {id} = req.params;
    const query_text  = ` 
        DELETE FROM banner WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        
    }
}

const GetOrders = async (req, res) =>{
    const {page, limit} = req.query;
    let offSet = ``
    if(page && limit){
        offSet = `OFFSET ${page*limit} LIMIT ${limit}`
    }
    const query_text = `
        SELECT 
            (
                SELECT COUNT(*) FROM orders
            ), (SELECT json_agg(ord) FROM (
                SELECT o.id, o.phone, o.address, o.name, to_char(o.created_at, 'DD.MM.YYYY HH24:MI') AS created_at,
                    o.total_price, o.coupon, o.discount_id, d.discount_value, o.accepted, o.comment, o.paymant_id
                    FROM orders o
                    LEFT JOIN discounts d
                        ON d.id = o.discount_id
                    ORDER BY o.id DESC
                    ${offSet}
            )ord) AS orders 
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const UpdateAccept = async (req, res)=>{
    const {id} = req.params;
    const {accept} = req.body;
    const select_query = `
        SELECT * FROM orders WHERE id = ${id}
    `
    try {
        const k = await database.query(select_query, [])
        if(!k?.rows[0]){
            return res.status(status.notfound).send(false)
        }
        let phone = k?.rows[0].phone;
        let message = ``
        if(accept){
            message = `Ваш заказ принят в Online магазине Sharafyabi`
        }else{
            message = `Ваш заказ отклонён в Online магазине Sharafyabi`
        }
        SendSMS({phone, message})
    } catch (e) {
        console.log(e)
    }
    
    const query_text = `
        UPDATE orders SET accepted = ${accept} WHERE id = ${id}
    `
    try {
        await database.query(query_text,[])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return re.status(status.error).send(false)
    }
}

const GetOrderByID = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        SELECT p.name, oi.price, oi.quantity, d.discount_value, pt.name AS name_ru, o.paymant_id
        FROM order_items oi
            INNER JOIN products p 
                ON p.id = oi.product_id
            INNER JOIN product_translations pt
                ON pt.product_id = p.id AND pt.language_id = 2
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

const DeleteOrder = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        DELETE FROM orders WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GeneratePdf = async (req, res) =>{
    const {OrderGenerator} = require("../pdfmaker/pdf.js")
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
        }
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const ImportFromExcel = async (req, res) =>{
    const file = req.file;
    console.log(file)
    const xlsx = require('xlsx')
    // const database = require('./index.js')

    const wb = xlsx.readFile(`${file.path}`, {cellDates:true})
    const ws = wb.Sheets["price"]

    const data = xlsx.utils.sheet_to_json(ws)
    let query_text = `
        INSERT INTO products (name, articul, price, stock) VALUES 
    `
    let k=0;
    for(let i=0; i<data.length; i++){
        item = data[i];
        if((item.stock || item.articul)){
            if(k ){
                query_text += ", "
            }
            query_text += `('${item.name}', '${item.articul ? item.articul : `null`}', ${item.price}, ${item.stock ? item.stock : 0 } )`
            
            k++;
        }
    }
    query_text += `ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock`
    try {
        await database.query(query_text, [])
        // console.log("Hey you hace added")
        fs.unlinkSync(file.path);
        return res.status(status.success).json(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const UpdateRecomended = async (req, res) =>{
    const {id} = req.params;
    const {value} = req.body
    const query_text = `
        UPDATE products SET recomended = ${value} WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(False)
    }
}

const UpdateNewInCome = async (req, res) =>{
    const {id} = req.params;
    const {value} = req.body
    const query_text = `
        UPDATE products SET new_in_come = ${value} WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(False)
    }
}

const GetProductsForSelect = async (req, res)=>{
    const {search} = req.query;
    const query_text = `
        SELECT id AS value, name AS label FROM products WHERE name ~* '${search}'
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetSelectCategories = async (req, res) =>{
    const query_text = `
        SELECT id AS value, name AS label FROM categories
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetmainStatistics = async (req, res) =>{
    const query_text = `
        SELECT (
            SELECT COUNT (*) FROM users
        ) AS user_count, (
            SELECT COUNT (*) FROM products
        ) AS product_count, (
            SELECT COUNT (*) FROM orders 
        ) AS order_count, (
            SELECT COUNT(*) FROM discounts 
            WHERE validity::tsrange @> localtimestamp
        ) AS discount_count
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})       
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }

}

const GetOrderStatistics = async (req, res) =>{
    const query_text = `
        SELECT to_char(date_trunc('DAY', o.created_at), 'DD.MM') AS created_at, COUNT(o.id) AS "Заказы"
        FROM orders o
        GROUP BY date_trunc('DAY', o.created_at)
        ORDER BY date_trunc('DAY', o.created_at)::date ASC
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetUserStatistics = async (req, res) =>{
    const query_text = `
        SELECT to_char(date_trunc('DAY', u.created_at), 'DD.MM') AS created_at, COUNT(u.id) AS "Пользователи"
        FROM users u
        GROUP BY date_trunc('DAY', u.created_at)
        ORDER BY date_trunc('DAY', u.created_at)::date ASC
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const UpdateShopData = async (req, res) =>{
    const {phone1, phone2, address_tm, address_ru, address_en, email} = req.body;
    console.log(req.body)
    const query_text = `
        UPDATE shop_data SET  phone1 = '${phone1}', phone2 = '${phone2}' , address_tm = '${address_tm}', address_ru = '${address_ru}',address_en = '${address_en}', email = '${email}'
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AdminFirebase = async (req, res) =>{
    const body = req.body;
    console.log(body)
    const {text, path_id, item_id} = req.body;
    console.log(path_id, item_id, text);
    let query_text =``
    if(path_id == 2){
        query_text = `SELECT pt.name, p.destination FROM products p
            LEFT JOIN product_translations pt ON
                pt.product_id = p.id AND pt.language_id = 2
            WHERE p.id = ${item_id}
            `
    }else if(path_id == 3){
        query_text = `
            SELECT ct.name, c.destination FROM categories c
                LEFT JOIN category_translations ct
                    ON ct.category_id = c.id AND ct.language_id = 2
        `
    }
    let item = {}
    try {
        const {rows} = await database.query(query_text, [])
        item = rows[0]
    } catch (e) {
        console.log(e)
    }
    let message = {
        data: {title:`${text}`, body:`${item?.name}`, destination: `${item?.destination}`, path_id:`${path_id}`, item_id:`${item_id}`}
        // token
    }
    // console.log(message)
    try {
        let k = {}
        try {
            query_text = `
                INSERT INTO push(path_id, item_id, text) 
                    VALUES (${path_id}, ${item_id}, '${text}')
                RETURNING id, path_id, item_id, text, to_char(created_at, 'DD.MM.YYYY HH24:MI') AS created_at
                
            `
             k = await database.query(query_text, [])
        } catch (e) {
            
        }
        await admin.messaging().sendToTopic('Events',message)
        // console.log("hello world")   
          
        return res.status(status.success).json({rows:k?.rows[0]})   
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetPushes = async(req, res) =>{
    const query_text = `
        SELECT id, path_id, item_id, text, to_char(created_at, 'DD.MM.YYYY HH24:MI') AS created_at
        FROM push
        ORDER BY id DESC
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetComments = async (req, res) =>{
    // const {id} = req.params;
    const {page, limit, is_active, search} = req.query
    let offSet = ``
    if(page && limit){
        offSet = `OFFSET ${page*limit} LIMIT ${limit}`
    }
    let wherePart = ``
    if(is_active){
        wherePart += ` AND pc.is_active = ${is_active}`
    }
    if(search){
        wherePart += ` AND (pt.name ~* '${search}' OR u.full_name ~* '${search}' OR pc.comment ~* '${search}' OR u.phone ~* '${search}')`
    }
    const query_text = `
        SELECT (
            SELECT COUNT(pc.id) 
                FROM product_comments pc 
                INNER JOIN users u
                    ON u.id = pc.user_id 
                INNER JOIN product_translations pt
                    ON pt.product_id = pc.product_id AND pt.language_id = 2
                WHERE pc.id > 0 ${wherePart}
        ) AS count, (
            SELECT json_agg(com) FROM (
                SELECT pc.comment, u.full_name, to_char(pc.created_at, 'DD.MM.YYYY HH24:MI') AS created_at, pc.id, u.phone,
                    pt.name, pc.is_active
                FROM product_comments pc
                INNER JOIN users u
                    ON u.id = pc.user_id 
                INNER JOIN product_translations pt
                    ON pt.product_id = pc.product_id AND pt.language_id = 2
                WHERE pc.id > 0 ${wherePart}
                ORDER BY pc.id DESC
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

const AcceptComment = async (req, res) =>{
    const {id} = req.params;
    const {is_active} = req.body;
    const query_text = `
        UPDATE product_comments SET is_active = ${is_active} WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(false)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const DeleteComment = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        DELETE FROM product_comments WHERE id = ${id}
    `
    try {
        await database.query(query_text ,[])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const SendSubscribeMessage = async (req, res) =>{
    const {message} = req.body;
    console.log("hello world")
    const {MessageSendler} = require('../utils/SubscribeSendler')
    await MessageSendler({message})
    try {
        const query_text = `
            INSERT INTO sended_messages(message) VALUES ('${message}') 
                RETURNING id, message, to_char(created_at, 'DD.MM.YYYY') AS created_at
        `
        const {rows} = await database.query(query_text, [])
        console.log(rows[0])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetMessages = async (req, res) =>{
    const {page, limit} = req.query;
    let offSet = ``
    if(page && limit){
        offSet = `OFFSET ${page*limit} LIMIT ${limit}`
    }
    const query_text = `
        SELECT (SELECT COUNT(*) FROM sended_messages),
            (SELECT json_agg(da) FROM (
                SELECT id, message, to_char(created_at, 'DD.MM.YYYY') AS created_at
                FROM sended_messages
                ORDER BY id DESC
                ${offSet}
            )da) AS data
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const DeleteSMS = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        DELETE FROM sended_messages WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const DeleteSubsciption = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        DELETE FROM subscriptions WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetSubsciptionPhones = async(req, res) =>{
    const {page, limit} = req.query;
    let offSet = ``
    if(page && limit){
        offSet = `OFFSET ${page*limit} LIMIT ${limit}`
    }
    const query_text = `
        SELECT (SELECT COUNT(*) FROM subscriptions),
            (SELECT json_agg(da) FROM (
                SELECT id, phone, to_char(created_at, 'DD.MM.YYYY') AS created_at
                FROM subscriptions
                ORDER BY id DESC
                ${offSet}
            )da) AS data
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
    const query_text = `
        SELECT * FROM shop_data
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetUsers = async (req, res) =>{
    const {page, limit, sort_column, sort_direction, search} = req.query;
    let offSet = ``
    if(page && limit){
        offSet = ` OFFSET ${page*limit} LIMIT ${limit}`
    }
    let wherePart = ``
    if(search){
        wherePart += ` AND (u.phone ~* '${search}' OR u.full_name ~* '${search}' )`
    }
    let column = `u.id`
    let direction = ` ASC`
    if(sort_column){
        column = sort_column
    }
    if(sort_direction){
        direction = sort_direction
    }
    try {
        const query_text = `
            SELECT (
                SELECT COUNT (*) FROM users
            ), (SELECT json_agg(u) FROM (
                SELECT u.id, u.full_name, u.email, u.phone, to_char(u.created_at, 'DD.MM.YYYY HH24:MI') AS created_at
                FROM users u
                WHERE u.id > 0 AND u.role_id = 2 ${wherePart}
                ORDER BY ${column} ${direction}
                ${offSet}

            )u) AS users
        `
        const {rows} =  await database.query(query_text, [])
        // console.log(rows)
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const AddTestimonial = async (req, res) =>{
    const {name, text, city} = req.body;
    const query_text = `
        INSERT INTO testimonial(name, text, city) VALUES ('${name}', '${text}', '${city}') RETURNING *
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}


const GetTestimonial = async (req, res) =>{
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

const DeleteTestimonial = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
        DELETE FROM testimonial WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const SendEmailNews = async (req, res) =>{
    const {sendEmail} = require("../utils/email")
    const query_text = `
        SELECT * FROM email_subscriptions
    `
    const query_text2 = `
       SELECT n.id, n.destination, nd.title, nd.article, to_char(n.created_at, 'DD.MM.YYYY') AS created_at
       FROM news n
       INNER JOIN news_descriptions nd
          ON nd.news_id = n.id AND nd.language_id = 2
        ORDER BY n.id DESC
        LIMIT 1
    `
    try {
        const {rows} = await database.query(query_text, [])
        const k = await database.query(query_text2, [])
        const emails = rows;
        const item = k.rows[0];
        await sendEmail({item, emails})
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetEmails = async (req,res) =>{
    const {page, limit} = req.query
    let offSet = ``
    if(page && limit){
        offSet = `OFFSET ${page*limit} LIMIT ${limit}`
    }
    const query_text = `
    SELECT (
        SELECT COUNT(*) FROM email_subscriptions
        ), (SELECT json_agg (da) FROM (
            SELECT id, email, to_char(created_at, 'DD.MM.YYYY') 
            FROM email_subscriptions
            ${offSet}
        )da) AS  data
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows:rows[0]})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const DeleteEmail = async (req, res) =>{
    const {id} = req.params;
    const query_text = `
    DELETE FROM email_subscriptions WHERE id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}
module.exports = {
    Login,
    LoadAdmin,

    AddCategory,
    UpdateCategory,
    GetCategories,
    AddSubCategory,
    
    AddProducer,
    AddProducerImage,
    UpdateProducer,
    DeleteProducer,

    GetProducers,
    AddCategoryImage, 
    DeleteCategory,

    AddProduct,
    AddProductImage,
    UpdateProduct,
    GetProductImages,
    DeleteProductImage,

    AddNews,
    AddNewsImage,
    DeleteNews,
    UpdateNews,

    AddVideoInformation,
    AddVideoFile, 
    AddVideoPoster,
    DeleteVideo,
    
    GetProducts,
    AddSale,
    GetSales,
    GetNews,
    AddBanner,
    GetBanners,
    DeleteBanner,
    GetOrders,
    GetOrderByID,
    GeneratePdf,
    DeactivateSales,
    ImportFromExcel,
    UpdateRecomended,
    UpdateNewInCome,
    GetProductsForSelect,
    GetSelectCategories,
    GetmainStatistics,
    GetUserStatistics,
    GetOrderStatistics,
    GetSelectProducers,
    UpdateAccept,
    DeleteOrder,
    UpdateShopData,
    AdminFirebase,
    GetComments,
    AcceptComment,
    DeleteComment,
    SendSubscribeMessage,
    GetMessages,
    DeleteSMS,
    DeleteSubsciption,
    GetSubsciptionPhones,
    GetPushes,
    GetShopData,
    GetUsers,
    GetEmails,
    DeleteEmail,
    AddTestimonial,
    GetTestimonial,
    DeleteTestimonial,
    SendEmailNews
}
