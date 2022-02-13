const nodemailer = require("nodemailer");

const sendEmail = async ()=>{
    // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "dovran@gamysh.com", // generated ethereal user
      pass: "Parola7cd4", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <dovran@gamysh.com>', // sender address
    to: "dovran@takyk.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

sendEmail()