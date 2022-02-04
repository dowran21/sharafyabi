const database = require('../db/index')
require('dotenv').config()
const axios = require('axios');

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
 
const SendSMS = async({phone, message}) => {
    let tel_number = `${phone.replace('+', '')}`;
    try{
        await axios({
        method: 'post',
        url: process.env.API_PHONE_MESSAGE,
        data: {
            phone:tel_number,
            sms_message:message,
            service:"Sharafyabi"
        }
        })
    }catch(err){
        // console.log(err)
    }
}
 
module.exports = {MessageSendler};
