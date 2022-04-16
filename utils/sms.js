require('dotenv').config()
const axios = require('axios');
 
const SendSMS = async({phone, message}) => {
    // let tel_number = `${phone.replace('+', '')}`;
    console.log(phone, message)
    try{
        await axios({
        method: 'post',
        url: `http://sms.sarweal.com/send-sms/to/service/sharafyabi`,
        data: {
            to:`+993${phone}`,
            message:message
        }
        })
        return true
    }catch(err){
        console.log(err)
        return true
    }
}
 
module.exports = {SendSMS};