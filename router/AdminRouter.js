const express = require('express');
const router = new express.Router();
const AdminController = require('../controllers/AdminController')
const {VerifyAdminAccessToken, VerifyAdminRefreshToken} = require('../middleware/AuthMiddleware');
// const { resize_producer_image,  } = require('../middleware/resize');
const upload = require('../middleware/upload');
const {resize_producers_categories, resize_product_images, resize_news} = require('../middleware/resize.js');

router.post('/login', AdminController.Login)
router.get('/load-admin', VerifyAdminRefreshToken, AdminController.LoadAdmin )


router.post('/add-category',VerifyAdminAccessToken, AdminController.AddCategory);
router.post('/update-category/:id', VerifyAdminAccessToken,  AdminController.UpdateCategory);
router.post('/add-category-image/:id', VerifyAdminAccessToken, upload.single("picture"),resize_producers_categories, AdminController.AddCategoryImage)
router.post('/add-producer', VerifyAdminAccessToken, AdminController.AddProducer);
router.post('/add-producer-image/:id', VerifyAdminAccessToken, upload.single("picture"), resize_producers_categories, AdminController.AddProducerImage)

router.get('/categories',VerifyAdminAccessToken, AdminController.GetCategories)
router.get('/producers',VerifyAdminAccessToken, AdminController.GetProducers)
router.post('/add-product', VerifyAdminAccessToken, AdminController.AddProduct);
router.post('/add-product-image/:id', VerifyAdminAccessToken, upload.single("picture"), resize_product_images, AdminController.AddProductImage)
router.post('/update-product/:id', VerifyAdminAccessToken, AdminController.UpdateProduct)

router.post('/add-news', VerifyAdminAccessToken, AdminController.AddNews)
router.post('/add-news-image/:id', VerifyAdminAccessToken, upload.single("picture"), resize_news, AdminController.AddNewsImage)
router.get('/get-news', VerifyAdminAccessToken, AdminController.GetNews)
router.post('/delete-news/:id', VerifyAdminAccessToken, AdminController.DeleteNews)

router.post("/add-sale", VerifyAdminAccessToken, AdminController.AddSale)
router.get("/get-sales", VerifyAdminAccessToken, AdminController.GetSales)
router.post('/add-banner', VerifyAdminAccessToken, upload.single("picture"), resize_news, AdminController.AddBanner)

router.get('/products', VerifyAdminAccessToken, AdminController.GetProducts);
router.get('/get-banners', VerifyAdminAccessToken, AdminController.GetBanners)
router.post('/delete-banner/:id', VerifyAdminAccessToken, AdminController.DeleteBanner)


module.exports = router;