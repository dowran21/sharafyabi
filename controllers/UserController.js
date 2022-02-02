const database = require ("../db/index.js")
const {status} = require('../utils/status')
const UserHelper = require('../utils/index.js')

const UserRegistration = async (req, res) =>{
    const {full_name, password, email, phone} = req.body;
    const hashedPassword = await UserHelper.HashPassword(password)
    const {lang} = req.params;
    const query_text = `
        INSERT INTO users (full_name, password, email, phone, role_id) VALUES
        ('${full_name}', '${hashedPassword}', ${email ? `${email}`:'null'}, '${phone}', 2) RETURNING *
    `
    try {
        const {rows} = await database.query(query_text, [])
        const data = {id:rows[0].id, full_name:rows[0].full_name, email:rows[0].email, phone:rows[0].phone}
        const token = await UserHelper.GenerateUserAccessToken(data)
        const refresh_token = await UserHelper.GenerateUserRefreshToken(data)
        return res.status(status.success).json({token, refresh_token, data})
    } catch (e) {
        if(e.message.includes("duplicate key value violates unique constraint")){
            let message = {}
            message["phone"] = `${lang==='ru' ? `Номер уже зарегестрирован` : lang === 'en' ? `Phone already exists` : `Belgi eýýäm bar`}`
            return res.status(status.conflict).send({error:message})
        }
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const UserLogin = async (req, res) =>{
    const {phone, password} = req.body;
    const query_text = `
        SELECT * FROM users WHERE phone = '${phone}'
    `
    try {
        const {rows} = await database.query(query_text, []);
        const user = rows[0];
        if(!user){
            let message = {}
            message["phone"] = "Телефон или пароль неправильный"
            return res.status(status.notfound).send({error:message})
        }
        const compare = await UserHelper.ComparePassword(password, user?.password)
        if(!compare){
            let message = {}
            message["phone"] = "Телефон или пароль неправильный"
            return res.status(status.notfound).send({error:message})
        }
        const data = {id:user.id, full_name:user.full_name, email:user.email, phone:user.phone}
        const token = await UserHelper.GenerateUserAccessToken(data)
        const refresh_token = await UserHelper.GenerateUserRefreshToken(data)
        return res.status(status.success).json({token, refresh_token, data})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send("Неизвестная ошибка")   
    }   
}

const AddToWishList = async (req, res) =>{
    const user_id = req.user?.id;
    const {id} = req.params
    const query_text = `
        INSERT INTO wish_lists (user_id, product_id) VALUES (${user_id}, ${id})
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const RemoveFromWishList = async (req, res) =>{
    const user_id = req.user?.id;
    const {id} = req.params
    const query_text = `
        DELETE FROM wish_lists WHERE user_id = ${user_id} AND product_id = ${id}
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetOrders = async (req, res) =>{
    const user_id = req.user?.id
    const query_text = `
        SELECT o.id, o.phone, o.address, o.name, to_char(o.created_at, 'YYYY-MM-DD HH24:MI') AS created_at,
        o.total_price, o.coupon, o.discount_id, d.discount_value
        FROM orders o
        LEFT JOIN discounts d
            ON d.id = o.discount_id
        WHERE o.user_id = ${user_id}
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const GetOrderByID = async (req, res) =>{
    const user_id = req.user?.id
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
            WHERE o.id = ${id} AND o.user_id = ${user_id}
    `
    try {
        const {rows} = await database.query(query_text, [])
        return res.status(status.success).json({rows})
    } catch (e) {
        console.log(e) 
        return res.status(status.error).send(false)
    }
}

const CreateComment = async (req, res) =>{
    const {comment} = req.body;
    console.log(comment)
    const {product_id} = req.params;
    const user_id = 1
    const query_text = `
        INSERT INTO product_comments (user_id, product_id, comment) VALUES (${user_id}, ${product_id}, '${comment}')
    `
    try {
        await database.query(query_text, [])
        return res.status(status.success).send(true)
    } catch (e) {
        console.log(e)
        return res.status(status.error).send(false)
    }
}

const CreateSubComment = async (req, res) =>{
    const {comment_sub} = req.body;
    const {product_id, main_comment_id} = req.params;
    const user_id = 1
    const query_text = `
        INSERT INTO product_comments (user_id, product_id, comment, main_comment_id) VALUES (${user_id}, ${product_id}, '${comment_sub}', ${main_comment_id})
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
    UserRegistration,
    UserLogin,
    AddToWishList,
    RemoveFromWishList,
    GetOrders,
    GetOrderByID,
    CreateComment,
    CreateSubComment
}