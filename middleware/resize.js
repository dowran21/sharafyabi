const moment = require('moment')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const resize_producers_categories  = async (req, res, next) =>{
    console.log(req.files)
    if (req.file){
        let dir = `./uploads/producers_categories`
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        } 
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        const name = req.file.originalname.replace(' ', '').split('.')[0];
        req.file.path = `uploads/producers_categories/${date}`
        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp", {quality:30})
            .toFile(`./uploads/producers_categories/${date}-mini.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp", {quality:60})
            .toFile(`./uploads/producers_categories/${date}-big.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp")
            .toFile(`./uploads/producers_categories/${date}-large.webp`)
        
        fs.unlinkSync(`./uploads/${req.file.filename}`)
    }else{
        next()
    }
    next()
}

const resize_news  = async (req, res, next) =>{
    // console.log(req.files)
    if (req.file){
        let dir = `./uploads/news`
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        } 
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        const name = req.file.originalname.replace(' ', '').split('.')[0];
        req.file.path = `uploads/news/${date}`

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp")
            .toFile(`./uploads/news/${date}-mini.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp")
            .resize(1000, 700, {
                fit: 'fill',
            })
            .toFile(`./uploads/news/${date}-big.webp`)

        // await sharp(`./uploads/${req.file.filename}`)
        //     .toFormat("webp")
        //     .resize(360, 240, {
        //         fit: 'fill',
        //     })
        //     .toFile(`./uploads/news/${date}-${name}-big.webp`)
        
        fs.unlinkSync(`./uploads/${req.file.filename}`)
    }else{
        next()
    }
    next()
}

const resize_banners  = async (req, res, next) =>{
    // console.log(req.files)
    if (req.file){
        let dir = `./uploads/news`
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        } 
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        const name = req.file.originalname.replace(' ', '').split('.')[0];
        req.file.path = `uploads/news/${date}`

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp", {quality:50})
            .toFile(`./uploads/news/${date}-big.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp", {quality:50})
            .toFile(`./uploads/news/${date}-slide-big.webp`)
        
        fs.unlinkSync(`./uploads/${req.file.filename}`)
    }else{
        next()
    }
    next()
}

const resize_product_images  = async (req, res, next) =>{
    // console.log(req.files)
    const {id} =req.params
    if (req.files.length){
        let dir = `./uploads/${id}`
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        } 
        for(let i=0; i<req.files?.length; i++){
            const date = moment().format('DDMMYYYY-HHmmss_SSS');
            const name = req.files[i].originalname.replace(' ', '').split('.')[0];
            file = req.files[i]
            req.files[i].path = `uploads/${id}/${date}`
            await sharp(`./uploads/${req.files[i].filename}`)
                .toFormat("webp", {quality:50})
                .toFile(`./uploads/${id}/${date}-mini.webp`)

            await sharp(`./uploads/${req.files[i].filename}`)
                .toFormat("webp", {quality:80})
                .toFile(`./uploads/${id}/${date}-big.webp`)

            await sharp(`./uploads/${req.files[i].filename}`)
                .toFormat("webp")
                .toFile(`./uploads/${id}/${date}-large.webp`)
            
            fs.unlinkSync(`./uploads/${req.files[i].filename}`)
        }
        
    }else{
        next()
    }
    next()
}
// 1MONTH300 

module.exports = {
    resize_producers_categories,
    resize_product_images,
    resize_news,
    resize_banners
}