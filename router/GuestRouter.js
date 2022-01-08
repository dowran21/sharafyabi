const express = require('express');
const router = new express.Router();
const GuestController = require('../controllers/GuestController')

router.get('/:lang/get-categories', GuestController.GetCategories);
router.get('/:lang/get-producers', GuestController.GetProducers);
router.get('/:lang/get-products', GuestController.GetProducts);
router.get('/:lang/get-cart-products', GuestController.GetCartProducts)


module.exports = router;