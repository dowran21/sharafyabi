const express = require('express');
const router = new express.Router();
const GuestController = require('../controllers/GuestController')
const {QuerySchemaMiddleware, SchemaMiddleware} = require("../middleware/SchemaMiddleware")
const Schema = require("../schemas/UserSchema")

router.get('/:lang/get-categories', GuestController.GetCategories);
router.get('/:lang/get-producers', GuestController.GetProducers);
router.get('/:lang/get-products', QuerySchemaMiddleware(Schema.Products_filter), GuestController.GetProducts);
router.get('/:lang/get-product/:id', GuestController.GetProductByID)


router.get('/:lang/get-cart-products', GuestController.GetCartProducts)
router.post('/:lang/create-order', SchemaMiddleware(Schema.Create_Order), GuestController.CreateOrder)

router.get('/:lang/get-news', GuestController.GetNews);
router.get('/:lang/get-news-by-id/:id', GuestController.GetNewsByID)

router.get('/:lang/get-banners', GuestController.GetBanners)

router.get('/:lang/get-wish-list', GuestController.GetWishList)

router.post('/:lang/add-to-subscription', SchemaMiddleware(Schema.Subscription), GuestController.AddtoSubscription)
router.get('/:lang/get-coupon', GuestController.GetCoupon)

module.exports = router;