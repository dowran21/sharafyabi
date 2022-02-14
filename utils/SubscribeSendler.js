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
        // rows.map(item =>{
        //   await  
        // })
        console.log(rows)
        for(let i = 0; i<rows.length; i++){
            setTimeout(()=>{
                await SendSMS({"phone":rows[i]?.phone, message})
            }, i*100)
        }
    } catch (e) {
        
    }
}
 
module.exports = {MessageSendler};
