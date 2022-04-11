    let transporter = nodemailer.createTransport({
                    host: "smtp.yandex.ru",
                    port: 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                      user: "order@sharafyabi.com", // generated ethereal user
                      pass: "W2T4,Q:+", // generated ethereal password
                    },
                  });
                  
                  // send mail with defined transport object
                  let info = await transporter.sendMail({
                    from: '"Пришел заказ на Sharafyabi Online Shop " <order@sharafyabi.com>', // sender address
                    to: "order@sharafyabi.com, hello@takyk.com", // list of receivers
                    subject: "Заказ", // Subject line
                    text: "Был принять заказ пожалуйста посмотрите его", // plain text body
                    html: `<b>Заказ ${id}</b>
                      <p>Заказ от ${name}</p>
                      <h4>Номер ${phone}</h4>
                      <h4>Общая сумма ${totalPrice}</h4>
                     
                      <table>
                        <head>
                            <tr>
                                <td>
                                    ID
                                </td>
                                <td>
                                    Наименование
                                </td>
                                <td>
                                    Количество
                                </td>
                                <td>
                                    Цена
                                </td>
                            <tr>
                        </head>
                        <body>
                            ${cart.map(item => `
                            <tr>
                                <td>
                                    ${item.id}
                                </td>
                                <td>
                                    ${item.name}
                                </td>
                                <td>
                                    ${item.quantity}
                                </td>
                                <td>
                                    ${item.price}
                                </td>
                            </tr>
                            `)}
                        </body>
                      </table>
                      </br>
                      </br>
                      <a href = "https://admin.sharafyabi.com/#/orders">Админ панель</a>
                    `, // html body
                  });
                  // console.log("email message sent")
                  console.log(info)