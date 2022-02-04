const express = require('express');
const router = new express.Router();
const AdminController = require('../controllers/AdminController')
const {VerifyAdminAccessToken, VerifyAdminRefreshToken} = require('../middleware/AuthMiddleware');
// const { resize_producer_image,  } = require('../middleware/resize');
const upload = require('../middleware/upload');
const {resize_producers_categories, resize_product_images, resize_news, resize_banners} = require('../middleware/resize.js');

router.post('/login', AdminController.Login)
router.get('/load-admin', VerifyAdminRefreshToken, AdminController.LoadAdmin )


router.post('/add-category',VerifyAdminAccessToken, AdminController.AddCategory);
router.post('/update-category/:id', VerifyAdminAccessToken,  AdminController.UpdateCategory);
router.post('/add-category-image/:id', VerifyAdminAccessToken, upload.single("picture"),resize_producers_categories, AdminController.AddCategoryImage)
router.post('/add-producer', VerifyAdminAccessToken, AdminController.AddProducer);
router.post('/update-producer/:id', VerifyAdminAccessToken, AdminController.UpdateProducer)
router.post('/add-producer-image/:id', VerifyAdminAccessToken, upload.single("picture"), resize_producers_categories, AdminController.AddProducerImage)
router.post('/delete-producer/:id', VerifyAdminAccessToken, AdminController.DeleteProducer)
router.post('/delete-category/:id', VerifyAdminAccessToken, AdminController.DeleteCategory)

router.get('/categories',VerifyAdminAccessToken, AdminController.GetCategories)
router.get('/producers',VerifyAdminAccessToken, AdminController.GetProducers)
router.post('/add-product', VerifyAdminAccessToken, AdminController.AddProduct);
router.post('/add-product-image/:id', VerifyAdminAccessToken, upload.single("picture"), resize_product_images, AdminController.AddProductImage)
router.post('/update-product/:id', VerifyAdminAccessToken, AdminController.UpdateProduct)
router.post('/add-sub-category/:id', VerifyAdminAccessToken, AdminController.AddSubCategory)

router.post('/add-news', VerifyAdminAccessToken, AdminController.AddNews)
router.post('/add-news-image/:id', VerifyAdminAccessToken, upload.single("picture"), resize_news, AdminController.AddNewsImage)
router.get('/get-news', VerifyAdminAccessToken, AdminController.GetNews)
router.post('/delete-news/:id', VerifyAdminAccessToken, AdminController.DeleteNews)
router.post('/update-news/:id', VerifyAdminAccessToken, AdminController.UpdateNews)

router.post("/add-sale", VerifyAdminAccessToken, AdminController.AddSale)
router.get("/get-sales", VerifyAdminAccessToken, AdminController.GetSales)
router.post('/deactivate-sale/:id', VerifyAdminAccessToken, AdminController.DeactivateSales)

router.get('/products', VerifyAdminAccessToken, AdminController.GetProducts);

router.post('/add-banner/:id', VerifyAdminAccessToken, upload.single("picture"), resize_banners, AdminController.AddBanner)
router.get('/get-banners/:id', VerifyAdminAccessToken, AdminController.GetBanners)
router.post('/delete-banner/:id', VerifyAdminAccessToken, AdminController.DeleteBanner)

router.get('/get-orders', VerifyAdminAccessToken, AdminController.GetOrders)
router.get('/get-order/:id', VerifyAdminAccessToken, AdminController.GetOrderByID)
router.get('/generate-pdf/:id', VerifyAdminAccessToken, AdminController.GeneratePdf)
router.post('/import-from-excel', VerifyAdminAccessToken, upload.single('excel'), AdminController.ImportFromExcel)
router.post('/update-recomended/:id', VerifyAdminAccessToken, AdminController.UpdateRecomended)
router.post('/update-new-in-come/:id', VerifyAdminAccessToken, AdminController.UpdateNewInCome)

router.get('/select-products', VerifyAdminAccessToken, AdminController.GetProductsForSelect);
router.get('/select-categories', VerifyAdminAccessToken, AdminController.GetSelectCategories)
router.get('/select-producers', VerifyAdminAccessToken, AdminController.GetSelectProducers)

router.get('/main-statistics', VerifyAdminAccessToken, AdminController.GetmainStatistics);
router.get('/order-statistics', VerifyAdminAccessToken, AdminController.GetOrderStatistics);
router.post('/delete-order/:id', VerifyAdminAccessToken, AdminController.DeleteOrder)
router.post('/update-accept/:id', VerifyAdminAccessToken, AdminController.UpdateAccept)
router.post("/push", VerifyAdminAccessToken, AdminController.AdminFirebase)
router.post('/update-shop-data', VerifyAdminAccessToken, AdminController.UpdateShopData)
router.get('/get-comments', VerifyAdminAccessToken, AdminController.GetComments)
router.post(`/activate-comment/:id`, VerifyAdminAccessToken, AdminController.AcceptComment)
router.post('/delete-comment/:id', VerifyAdminAccessToken, AdminController.DeleteComment)
router.get('/get-user-statistics', VerifyAdminAccessToken, AdminController.GetUserStatistics)

router.post('/send-subscribe-messsage', VerifyAdminAccessToken, AdminController.SendSubscribeMessage)
router.get('/get-messages', VerifyAdminAccessToken, AdminController.GetMessages)
router.post('/delete-sms/:id', VerifyAdminAccessToken, AdminController.DeleteSMS)
router.post('/delete-subsciption/:id', VerifyAdminAccessToken, AdminController.DeleteSubsciption)
router.get('/get-phones', VerifyAdminAccessToken, AdminController.GetSubsciptionPhones)

module.exports = router;