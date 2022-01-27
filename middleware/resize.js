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
        req.file.path = `uploads/producers_categories/${date}-${name}`
        await sharp(`./uploads/${req.file.filename}`)
            .resize(300, 300, {
                fit: 'fill',
            })
            .toFormat("webp")
            .toFile(`./uploads/producers_categories/${date}-${name}-mini.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .resize(640, 640)
            .toFormat("webp")
            .toFile(`./uploads/producers_categories/${date}-${name}-big.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp")
            .resize(900, 900)
            .toFile(`./uploads/producers_categories/${date}-${name}-large.webp`)
        
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
        req.file.path = `uploads/news/${date}-${name}`

        await sharp(`./uploads/${req.file.filename}`)
            .resize(360, 240, {
                fit: 'fill',
            })
            .toFormat("webp")
            .toFile(`./uploads/news/${date}-${name}-mini.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp")
            .resize(1000, 700, {
                fit: 'fill',
            })
            .toFile(`./uploads/news/${date}-${name}-big.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp")
            .resize(360, 240, {
                fit: 'fill',
            })
            .toFile(`./uploads/news/${date}-${name}-big.webp`)
        
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
        req.file.path = `uploads/news/${date}-${name}`

        await sharp(`./uploads/${req.file.filename}`)
            .resize(1920, 550, {
                fit: 'fill',
            })
            .toFormat("webp")
            .toFile(`./uploads/news/${date}-${name}-big.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp")
            .resize(1920, 350, {
                fit: 'fill',
            })
            .toFile(`./uploads/news/${date}-${name}-slide-big.webp`)
        
        fs.unlinkSync(`./uploads/${req.file.filename}`)
    }else{
        next()
    }
    next()
}

const resize_product_images  = async (req, res, next) =>{
    // console.log(req.files)
    const {id} =req.params
    if (req.file){
        let dir = `./uploads/${id}`
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        } 
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        const name = req.file.originalname.replace(' ', '').split('.')[0];
        req.file.path = `uploads/${id}/${date}-${name}`
        await sharp(`./uploads/${req.file.filename}`)
            .resize(300, 300, {
                fit: 'fill',
            })
            .toFormat("webp")
            .toFile(`./uploads/${id}/${date}-${name}-mini.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .resize(600, 600, {
                fit: 'fill',
            })
            .toFormat("webp")
            .toFile(`./uploads/${id}/${date}-${name}-big.webp`)

        await sharp(`./uploads/${req.file.filename}`)
            .toFormat("webp")
            .resize(900, 900, {
                fit: 'fill',
            })
            .toFile(`./uploads/${id}/${date}-${name}-large.webp`)
        
        fs.unlinkSync(`./uploads/${req.file.filename}`)
    }else{
        next()
    }
    next()
}


module.exports = {
    resize_producers_categories,
    resize_product_images,
    resize_news,
    resize_banners
}