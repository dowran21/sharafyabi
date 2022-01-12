const xlsx = require('xlsx')
const database = require('./index.js')

const wb = xlsx.readFile("pricelist.xls", {cellDates:true})
const ws = wb.Sheets["price"]

const data = xlsx.utils.sheet_to_json(ws)


const Adding = async (data)=>{
    let query_text = `
        INSERT INTO products (name, articul, price, stock) VALUES 
    `
    let k=0;
    for(let i=0; i<data.length; i++){
        item = data[i];
        if((item.stock || item.articul)){
            if(k ){
                query_text += ", "
            }
            query_text += `('${item.name}', '${item.articul ? item.articul : `null`}', ${item.price}, ${item.stock ? item.stock : 0 } )`
            
            k++;
        }
    }
    query_text += `ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock`
    try {
        // console.log(query_text)
        await database.query(query_text, [])
        console.log("Hey you hace added")
    } catch (e) {
        console.log(e)
    }
}
Adding(data)