const PDFDocument = require('pdfkit')
const fs = require('fs');
// const { height } = require('pdfkit/js/page');
const path = require('path');
let robotoRegular = path.join(__dirname, 'Roboto-Regular.ttf');
let arial = path.join(__dirname, 'arial.ttf')

async function OrderGenerator (data){
    const {id, created_at, total_price, name, phone, address, discount_value, order_items} = data
    let total = 0;
    for(let i =0; i<order_items.length; i++){
        total += order_items[i]?.discount_value ? order_items[i].price*order_items[i].discount_value*order_items[i].quantity*0.01 : order_items[i].price*order_items[i].quantity
    }
    let doc = new PDFDocument({ size: "A4", margins : {top: 0,bottom:30,left: 30,right: 30}});
    doc.font(robotoRegular);
    doc
        .image('./logo1.png', 0, 0, { width: 150, height:150})
        .fillColor('#000')
        .fontSize(20)
        .text('Заказ', 275, 50, {align: 'right'})
        .fontSize(10)
        .text(`номер Заказа: ${id}`, {align: 'right'})
        .text(`Время оформления заказа: ${created_at}`, {align: 'right'})
        .text(`Общая сумма: ${Math.floor(total*10)/10}`, {align:"right"})
        .text(`Скидка: ${discount_value}`, {align:"right"})
        .text(`Сумма заказа: ${total_price}TMT`, {align: 'right'})
        .moveDown()
        .text(`Заказано от:\n ${name}\n+993${phone}`, {align: 'right'})
        .text(`Аддресс доставки: ${address}`, {align: 'right'})

    const beginningOfPage = 50
    const endOfPage = 550


    doc.moveDown()
    doc.moveDown()
    let tableTop = 200
    const itemCodeX = 20
    const descriptionX = 60
    const quantityX = 380
    const discountX = 420
    const priceX = 460
    const amountX = 520

    doc
        .fontSize(10)
        .text('Код', itemCodeX, tableTop, {bold: true})
        .text('Наименование', descriptionX, tableTop)
        .text('Кол.', quantityX, tableTop)
        .text('Скидка', discountX, tableTop)
        .text('Цена', priceX, tableTop)
        .text('Сумма', amountX, tableTop)
    doc.rect(17, tableTop - 5, 540, 0.2).fillColor('#000').stroke('#000')

    // const items = invoice.items
    let i = 0

    let h = 0
    let j = 0;

    for (i = 0; i < order_items.length; i++) {
        const item = order_items[i]
        let y = tableTop + 25 + ((i-j) * 25)
        if(y > 750){
            
            doc.rect(17, h + 20, 540, 0.2).fillColor('#000').stroke('#000')
            doc.rect(itemCodeX -3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            doc.rect(descriptionX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            doc.rect(quantityX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            doc.rect(discountX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            doc.rect(priceX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            doc.rect(amountX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
            tableTop = 50;
            j = i;
            doc.addPage()
        }
        y = tableTop + 25 + ((i-j) * 25)
        h=y;
        doc
            .fontSize(10).font(arial)
            .text(item.id, itemCodeX, y)
            .text(`${item.name ? item.name : item.name_ru}`, descriptionX, y)
            .text(item.quantity, quantityX, y)
            .text(`${item.discount_value}`, discountX, y)
            .text(`${item.price}`, priceX, y)
            .text(`${item.discount_value ? item.price*item.discount_value*item.quantity*0.01 : item.price*item.quantity}`, amountX, y)
        doc.rect(17, y - 5, 540, 0.2).fillColor('#000').stroke('#000')
    }
    doc.rect(17, h + 20, 540, 0.2).fillColor('#000').stroke('#000')
    doc.rect(itemCodeX -3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    doc.rect(descriptionX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    doc.rect(quantityX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    doc.rect(discountX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    doc.rect(priceX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')
    doc.rect(amountX-3, tableTop-4, 0.2, (h-tableTop+20)).fillColor('#000').stroke('#000')


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
