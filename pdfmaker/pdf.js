const PDFDocument = require('pdfkit')
const fs = require('fs');
// const { height } = require('pdfkit/js/page');
const path = require('path');
// const { text } = require('pdfkit');
let robotoRegular = path.join(__dirname, 'Roboto-Regular.ttf');
let arial = path.join(__dirname, 'arial.ttf')
let montes = path.join(__dirname, 'Montserrat-Bold.ttf')
let montes_light = path.join(__dirname, "Montserrat-Regular.ttf")

async function OrderGenerator (data){
    const {id, created_at, total_price, name, phone, address, discount_value, order_items, paymant_id, comment} = data
    let total = 0;
    for(let i =0; i<order_items.length; i++){
        total += order_items[i]?.discount_value ? order_items[i].price*(100-order_items[i].discount_value)*order_items[i].quantity*0.01 : order_items[i].price*order_items[i].quantity
    }
    let doc = new PDFDocument({ size: "A4", margins : {top: 0,bottom:30,left: 30,right: 30}});
    doc.font(montes);
    doc
        .image('./logo1.png', 0, 0, { width: 80, height:80})
        .fillColor('#4C844C')
        .fontSize(48)
        .text(`Заказ № ${id}` , 200, 15, {align: 'right'})
        .fontSize(30)
        .text('Sharafyabi', 65, 30)
        .fontSize(10).text("По продаже женской и детской продукции", 10 , 80, {bold:true})
        .fontSize(9)
        .fillColor('#4C844C').font(montes).text(`Дата:`, 560-doc.widthOfString(`Дата: ${created_at.slice(0, 10)}`), 80, {width:doc.widthOfString(`Дата: `), align:"right"})
        .fillColor("#515351").font(montes_light).text(created_at.slice(0, 10), 560-doc.widthOfString(`${created_at.slice(0, 10)}`), 80, {align:"right"})
        .fillColor('#4C844C').font(montes).text(`Время:`, 560-doc.widthOfString(`Время: ${created_at.slice(11, 16)}`), 92, {width:doc.widthOfString(`Время: `), align:"right"})
        .fillColor("#515351").font(montes_light).text(created_at.slice(11, 16), 560-doc.widthOfString(`${created_at.slice(11, 16)}`), 92, {align:"right"})
        .fillColor('#4C844C').font(montes).text(`Покупатель`, 0, 130, {width:160, align: 'right'})
        .fillColor("#515351").font(montes_light).text(name, 165, 130, {align:"left"} )
        .fillColor('#4C844C').font(montes).text(`Номер телефона`, 0, 143, {width:160, align: "right"})
        .fillColor("#515351").font(montes_light).text(`+993 ${phone}`, 165, 143, {align:"left"})
        .fillColor('#4C844C').font(montes).text(`Аддресс`, 0, 156, {width:160, align: "right"})
        .fillColor("#515351").font(montes_light).text(address, 165, 156, {align:"left"})
        // .fillColor('#4C844C').text(`Адресс`, 0, 156, {width:160, align: "right"})
        // .fillColor("#515351").text(address, 165, 156, {align:"left"})
        // .text(`Общая Сумма`, 0, 169, {width:160, align: "right"})
        // .text(Math.floor(total*10)/10, 165, 169, {align:"left"})
        .fillColor('#4C844C').font(montes).text(`Скидка`, 0, 169, {width:160, align: "right"})
        .fillColor("#515351").font(montes_light).text(discount_value ? discount_value : `нет`, 165, 169, {align:"left"})
        .fillColor('#4C844C').font(montes).text(`Счет`, 0, 182, {width:160, align: "right"})
        .fillColor("#515351").font(montes_light).text(total_price, 165, 182, {align:"left"})
        .fillColor('#4C844C').font(montes).text(`Способ оплаты`, 0, 195, {width:160, align: "right"})
        .fillColor("#515351").font(montes_light).text(`${paymant_id === 1 ? `Наличными` : `Карта`}`, 165, 195, {align:"left"})
        .fillColor('#4C844C').font(montes).text(`комментарий`, 0, 208, {width:160, align: "right"})
        .fillColor("#515351").font(montes_light).text(`${comment}`, 165, 208, {align:"left"})
        // .text(`номер Заказа: ${id}`, {align: 'right'})
        // .text(`Время оформления заказа: ${created_at}`, {align: 'right'})
        // .text(`Общая сумма: ${Math.floor(total*10)/10}`, {align:"right"})
        // .text(`Скидка: ${discount_value}`, {align:"right"})
        // .text(`Счет: ${total_price}TMT`, {align: 'right'})
        // .moveDown()
        // .text(`Аддресс доставки: ${address}`, {align: 'right'})

        // doc
        // .image('./logo1.png', 0, 0, { width: 80, height:80})
        // .fillColor('#000')
        // .fontSize(20)
        // .text('Заказ', 275, 50, {align: 'right'})
        // .fontSize(10)
        // .text(`номер Заказа: ${id}`, {align: 'right'})
        // .text(`Время оформления заказа: ${created_at}`, {align: 'right'})
        // .text(`Общая сумма: ${Math.floor(total*10)/10}`, {align:"right"})
        // .text(`Скидка: ${discount_value}`, {align:"right"})
        // .text(`Сумма заказа: ${total_price}TMT`, {align: 'right'})
        // .moveDown()
        // .text(`Заказано от:\n ${name}\n+993${phone}`, {align: 'right'})
        // .text(`Аддресс доставки: ${address}`, {align: 'right'})
    const beginningOfPage = 50
    const endOfPage = 550


    doc.moveDown()
    doc.moveDown()
    let tableTop = 240
    const itemCodeX = 20
    const descriptionX = 60
    const quantityX = 360
    const discountX = 400
    const priceX = 460
    const amountX = 520

    doc
        .fontSize(10).font(montes)
        // .text('Код', itemCodeX+2, tableTop, {height:22, expanded:true}).highlight(itemCodeX, tableTop-4, descriptionX-itemCodeX-2, 22, {color:"#4C844C"})
        .rect(itemCodeX, tableTop-4, descriptionX-itemCodeX-2, 22).fillAndStroke('#4C844C')
        .fill('#FFFFFF').stroke()
        .text("Код", itemCodeX+2, tableTop, {lineBreak: false, height:22, expanded:true} )

        .rect(descriptionX, tableTop-4, quantityX-descriptionX-2, 22).fillAndStroke('#4C844C')
        .fill('#FFFFFF').stroke()
        .text("Наименование", descriptionX+2, tableTop, {lineBreak: false, height:22, expanded:true} )
        
        .rect(quantityX, tableTop-4, discountX-quantityX-2, 22).fillAndStroke('#4C844C')
        .fill('#FFFFFF').stroke()
        .text("Кол.", quantityX+2, tableTop, {lineBreak: false, height:22, expanded:true} )
        
        .rect(discountX, tableTop-4, priceX-discountX-2, 22).fillAndStroke('#4C844C')
        .fill('#FFFFFF').stroke()
        .text("Скидка", discountX+2, tableTop, {lineBreak: false, height:22, expanded:true} )

        .rect(priceX, tableTop-4, amountX-priceX-2, 22).fillAndStroke('#4C844C')
        .fill('#FFFFFF').stroke()
        .text("Цена", priceX+2, tableTop, {lineBreak: false, height:22, expanded:true} )

        .rect(amountX, tableTop-4, 560-amountX-2, 22).fillAndStroke('#4C844C')
        .fill('#FFFFFF').stroke()
        .text("Сумма", amountX+2, tableTop, {lineBreak: false, height:22, expanded:true} )
        // doc.text('Наименование',  {height:22, expanded:true}).highlight(descriptionX, tableTop-4, quantityX-descriptionX-2, 22, {color:"#4C844C"})
        // doc.text('Кол.', quantityX+2, tableTop, {height:22, expanded:true}).highlight(quantityX, tableTop-4, discountX-quantityX-2, 22, {color:"#4C844C"})
        // doc.text('Скидка', discountX+2, tableTop, {height:22, expanded:true}).highlight(discountX, tableTop-4, priceX-discountX-2, 22, {color:"#4C844C"})
        // doc.text('Цена', priceX+2, tableTop, {height:22, expanded:true}).highlight(priceX, tableTop-4, amountX-priceX-2, 22, {color:"#4C844C"})
        // doc.text('Сумма', amountX+2, tableTop, {height:22, expanded:true}).highlight(amountX, tableTop-4, 560-amountX-2, 22, {color:"#4C844C"})
    // doc.rect(17, tableTop - 5, 540, 0.2).fillColor('#000').stroke('#000')

    // const items = invoice.items
    let i = 0

    let h = 0
    let j = 0;
    let y = 0;
    doc.font(montes_light)
    for (i = 0; i < order_items?.length; i++) {
        const item = order_items[i]
        y = tableTop + 20 + ((i-j) * 20)
        if(y > 750){
            
            // doc.rect(17, h + 20, 540, 0.2).fillColor('#000').stroke('#000')
            // doc.rect(itemCodeX -3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#FFFFFF')
            // doc.rect(descriptionX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            // doc.rect(quantityX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            // doc.rect(discountX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            // doc.rect(priceX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            // doc.rect(amountX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            tableTop = 50;
            j = i;
            doc.addPage()
        }
        y = tableTop + 20 + ((i-j) * 20)
        h=y;
        doc
            .fontSize(8).font(arial).fillColor("#000000")
            .rect(itemCodeX, y-4, descriptionX-itemCodeX-2, 16).fillAndStroke(`${i%2 ?`#799E79` : `#FFFFFF`}`).fill(`${i%2 ? '#FFFFFF' : `#000000`}`).stroke().text(item?.id, itemCodeX+2, y, {height:15})
            .rect(descriptionX, y-4, quantityX-descriptionX-2, 16, {color:`${i%2 ?`#799E79` : `#FFFFFF`}`}).fillAndStroke(`${i%2 ?`#799E79` : `#FFFFFF`}`).fill(`${i%2 ? '#FFFFFF' : `#000000`}`).stroke().text(`${item?.name ? item?.name : item?.name_ru}`, descriptionX+2, y, {height:15})
            .rect(quantityX, y-4, discountX-quantityX-2, 16, {color:`${i%2 ?`#799E79` : `#FFFFFF`}`}).fillAndStroke(`${i%2 ?`#799E79` : `#FFFFFF`}`).fill(`${i%2 ? '#FFFFFF' : `#000000`}`).stroke().text(item?.quantity, quantityX+2, y, {height:15})
            .rect(discountX, y-4, priceX-discountX-2, 16, {color:`${i%2 ?`#799E79` : `#FFFFFF`}`}).fillAndStroke(`${i%2 ?`#799E79` : `#FFFFFF`}`).fill(`${i%2 ? '#FFFFFF' : `#000000`}`).stroke().text(`${item?.discount_value ? item?.discount_value : `` }`, discountX+2, y, {height:15})
            .rect(priceX, y-4, amountX-priceX-2, 16, {color:`${i%2 ?`#799E79` : `#FFFFFF`}`}).fillAndStroke(`${i%2 ?`#799E79` : `#FFFFFF`}`).fill(`${i%2 ? '#FFFFFF' : `#000000`}`).stroke().text(`${item?.price}`, priceX+2, y, {height:15})
            .rect(amountX, y-4, 560-amountX-2, 16, {color:`${i%2 ?`#799E79` : `#FFFFFF`}`}).fillAndStroke(`${i%2 ?`#799E79` : `#FFFFFF`}`).fill(`${i%2 ? '#FFFFFF' : `#000000`}`).stroke().text(`${item?.discount_value ? item?.price*(100-item.discount_value)*item?.quantity*0.01 : item?.price*item?.quantity}`, amountX+2, y, {height:15})
        // doc.rect(17, y - 5, 540, 0.2).fillColor('#000').stroke('#000')
    }
    // doc.rect(17, h + 20, 540, 0.2).fillColor('#000').stroke('#000')
    // doc.rect(itemCodeX -3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    // doc.rect(descriptionX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    // doc.rect(quantityX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    // doc.rect(discountX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    // doc.rect(priceX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    // doc.rect(amountX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    doc.font(montes).fontSize(12).fillColor("#000").text("Благодарим за сотрудничество!", 0, y+40, {align:"center"})
    doc.font(montes).fontSize(12).fillColor("#000").text("Sharafyabi 744000, Ashgabat, +993 63 14 31 11, order@sharafyabi.com", 0, y+55, {align:"center"})


    const pdfBuffer = await new Promise(resolve => {
//	doc.pipe(fs.createWriteStream('some.pdf');
        doc.end()
        // console.log("hello")
        // doc.pipe(fs.createWriteStream("something.pdf"))
        const buffers = []
        doc.on("data", buffers.push.bind(buffers))
        doc.on("end", () => {
            const pdfData = Buffer.concat(buffers)
            resolve(pdfData)
        })
    });
    return {
        headers: {
            "content-type": "application/pdf",
	    "charset":"utf-8"
        },
        body: pdfBuffer.toString("base64"),
        isBase64Encoded: true,
    }

    // // write out file
    // theOutput.end()


}

module.exports = {OrderGenerator}
