const database = require('../db/index')
require('dotenv').config()
const axios = require('axios');
const {SendSMS} = require('./sms')

const MessageSendler = async ({message}) => {
    const query_text = `
        SELECT phone FROM subscriptions 
    `
    try {
        const {rows} = await database.query(query_text, [])
        rows.map(item =>{
            SendSMS({"phone":item.phone, message})
        })
    } catch (e) {
        
    }
}
 
module.exports = {MessageSendler};
