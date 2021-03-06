const express = require('express');
const router = new express.Router();
const AdminController = require('../controllers/AdminController')
const {VerifyAdminAccessToken, VerifyAdminRefreshToken, VerifyUserAccessToken} = require('../middleware/AuthMiddleware');
// const { resize_producer_image,  } = require('../middleware/resize');
const upload = require('../middleware/upload');
const {resize_producers_categories, resize_product_images, resize_news, resize_banners} = require('../middleware/resize.js');
const upload_video = require('../middleware/upload_video')

router.post('/login', AdminController.Login)
router.get('/load-admin', VerifyAdminRefreshToken, AdminController.LoadAdmin )


router.post('/add-category',VerifyAdminAccessToken, AdminController.AddCategory);
router.post('/update-category/:id', VerifyAdminAccessToken,  AdminController.UpdateCategory);
router.post('/add-category-image/:id', VerifyAdminAccessToken, upload.single("picture"),resize_producers_categories, AdminController.AddCategoryImage)
router.post('/delete-category/:id', VerifyAdminAccessToken, AdminController.DeleteCategory)
router.get('/categories',VerifyAdminAccessToken, AdminController.GetCategories)
router.post('/add-sub-category/:id', VerifyAdminAccessToken, AdminController.AddSubCategory)


router.post('/add-producer', VerifyAdminAccessToken, AdminController.AddProducer);
router.post('/update-producer/:id', VerifyAdminAccessToken, AdminController.UpdateProducer)
router.post('/add-producer-image/:id', VerifyAdminAccessToken, upload.single("picture"), resize_producers_categories, AdminController.AddProducerImage)
router.post('/delete-producer/:id', VerifyAdminAccessToken, AdminController.DeleteProducer)

router.get('/producers',VerifyAdminAccessToken, AdminController.GetProducers)
router.post('/add-product', VerifyAdminAccessToken, AdminController.AddProduct);
router.post('/add-product-images/:id', VerifyAdminAccessToken, upload.array("picture", 5), resize_product_images, AdminController.AddProductImage)
router.post('/update-product/:id', VerifyAdminAccessToken, AdminController.UpdateProduct)
router.get('/get-product-images/:id',VerifyAdminAccessToken, AdminController.GetProductImages)
router.post('/delete-product-image/:id', VerifyAdminAccessToken, AdminController.DeleteProductImage)
router.post('/delete-product/:id', VerifyAdminAccessToken, AdminController.DeleteProduct)
 
router.post('/add-video-information', VerifyAdminAccessToken, AdminController.AddVideoInformation);
router.post('/add-video-poster/:id', VerifyAdminAccessToken, upload.single("poster"), resize_banners, AdminController.AddVideoPoster)
router.post('/add-video-file/:id', VerifyAdminAccessToken, upload_video.single("video"), AdminController.AddVideoFile)
router.post('/delete-video/:id', VerifyAdminAccessToken, AdminController.DeleteVideo)
router.post('/update-video/:id', VerifyAdminAccessToken, AdminController.UpdateVideo)
router.get('/get-videos', VerifyAdminAccessToken, AdminController.GetVideos)

router.post('/add-news', VerifyAdminAccessToken, AdminController.AddNews)
router.post('/add-news-image/:id', VerifyAdminAccessToken, upload.single("picture"), resize_news, AdminController.AddNewsImage)
router.get('/get-news', VerifyAdminAccessToken, AdminController.GetNews)
router.post('/delete-news/:id', VerifyAdminAccessToken, AdminController.DeleteNews)
router.post('/update-news/:id', VerifyAdminAccessToken, AdminController.UpdateNews)

router.post("/add-sale", VerifyAdminAccessToken, AdminController.AddSale)
router.get("/get-sales", VerifyAdminAccessToken, AdminController.GetSales)
router.post('/deactivate-sale/:id', VerifyAdminAccessToken, AdminController.DeactivateSales)
router.post('/delete-sale/:id', VerifyAdminAccessToken, AdminController.DeleteSale)

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

router.get('/get-comments', VerifyAdminAccessToken, AdminController.GetComments)
router.post(`/activate-comment/:id`, VerifyAdminAccessToken, AdminController.AcceptComment)
router.post('/delete-comment/:id', VerifyAdminAccessToken, AdminController.DeleteComment)

router.get('/get-user-statistics', VerifyAdminAccessToken, AdminController.GetUserStatistics)
router.get('/get-pushes', VerifyAdminAccessToken, AdminController.GetPushes)
router.post('/delete-push/:id', VerifyAdminAccessToken, AdminController.DeletePush)

router.get('/get-messages', VerifyAdminAccessToken, AdminController.GetMessages)
router.post('/delete-sms/:id', VerifyAdminAccessToken, AdminController.DeleteSMS)
router.post('/delete-subsciption/:id', VerifyAdminAccessToken, AdminController.DeleteSubsciption)
router.get('/get-phones', VerifyAdminAccessToken, AdminController.GetSubsciptionPhones)

router.get('/get-shop-data', VerifyAdminAccessToken, AdminController.GetShopData)
router.post('/update-shop-data', VerifyAdminAccessToken, AdminController.UpdateShopData)

router.get('/get-users', VerifyAdminAccessToken, AdminController.GetUsers)
router.post('/delete-user/:id', VerifyAdminAccessToken, AdminController.DeleteUser)

router.post('/add-testimonial', VerifyAdminAccessToken, AdminController.AddTestimonial)
router.get('/get-testimonial', VerifyAdminAccessToken, AdminController.GetTestimonial)
router.post('/delete-testimonial/:id', VerifyAdminAccessToken, AdminController.DeleteTestimonial)

router.post('/send-email', VerifyAdminAccessToken, AdminController.SendEmailNews)
router.get('/get-emails', VerifyAdminAccessToken, AdminController.GetEmails)
router.post('/delete-email/:id', VerifyAdminAccessToken, AdminController.DeleteEmail)


router.post('/send-subscribe-messsage', VerifyAdminAccessToken, AdminController.SendSubscribeMessage)
router.get('/get-admin-messages', VerifyAdminAccessToken, AdminController.GetAdminMessages);
router.post('/delete-admin-message/:id', VerifyAdminAccessToken, AdminController.DeleteAdminMessage)

router.get('/get-coupon-orders', VerifyAdminAccessToken, AdminController.GetCouponOrders)
router.get('/get-sub-categories/:id', VerifyAdminAccessToken, AdminController.GetSubCategories)

router.get('/get-user-coupns', VerifyAdminAccessToken, AdminController.GetUserCoupons);
router.post('/add-user-coupon', VerifyAdminAccessToken, AdminController.AddUserCoupon)
router.post('/delete-user-coupon/:id', VerifyAdminAccessToken, AdminController.DeleteUserCoupon)

module.exports = router;