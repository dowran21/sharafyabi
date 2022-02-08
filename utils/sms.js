require('dotenv').config()
const axios = require('axios');
 
const SendSMS = async({phone, message}) => {
    let tel_number = `${phone.replace('+', '')}`;
    console.log(phone, message)
    try{
        await axios({
        method: 'post',
        url: `http://141.136.44.174:5004/send-sms`,
        data: {
            phone:tel_number,
            sms_message:message,
            service:"Sharafyabi"
        }
        })
        return true
    }catch(err){
        console.log(err)
        return true
    }
}
 
module.exports = {SendSMS};
