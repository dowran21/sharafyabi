const xlsx = require('xlsx')
const database = require('./index.js')

const wb = xlsx.readFile("pricelist.xls", {cellDates:true})
const ws = wb.Sheets["price"]

const data = xlsx.utils.sheet_to_json(ws)


const Adding = async (data)=>{
    let query_text = `
       WITH  
    `
    let k=0;
    for(let i=0; i<data.length; i++){
        item = data[i];
        if((item.stock || item.articul) && item.name_tm && item.name_eng  && item.articul != 's' && item.price != 's' && item.stock != 's'){
            if(k ){
                query_text += ", "
            }

            
            query_text += `inserted${i} AS (
                INSERT INTO products (name, articul, price, stock) 
                VALUES ('${item.name}', '${item.articul ? item.articul : `null`}', ${item.price ? item.price : 0}, ${item.stock ? item.stock : 0 })
                ON CONFLICT (name, articul) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock RETURNING *
                ), inserted_trans${i} AS (
                    INSERT INTO product_translations (product_id, language_id, name)
                    VALUES ((SELECT id FROM inserted${i}), 1, E'${item.name_tm}'),
                     ((SELECT id FROM inserted${i}), 2, E'${item.name}'),
                     ((SELECT id FROM inserted${i}), 3, E'${item.name_eng}')
                    ON CONFLICT (product_id, language_id) DO UPDATE SET name = EXCLUDED.name
                )`
            k++;
        }
    }
    query_text += ` SELECT 1`
    // console.log(query_text)
    try {
        // console.log(query_text)
        await database.query(query_text, [])
        console.log("Hey you have added")
    } catch (e) {
        console.log(e)
    }
}
Adding(data)