const express = require('express');
const router = new express.Router();
const UserController = require("../controllers/UserController")
const {VerifyUserAccessToken} = require('../middleware/AuthMiddleware')

router.post('/:lang/registration', UserController.UserRegistration);
router.post('/:lang/login', UserController.UserLogin)

router.post('/:lang/add-to-wish-list/:id',VerifyUserAccessToken, UserController.AddToWishList)
router.get('/:lang/remove-from-wish-list/:id', VerifyUserAccessToken, UserController.RemoveFromWishList)

router.get('/:lang/get-orders', VerifyUserAccessToken, UserController.GetOrders);
router.get('/:lang/get-order/:id', VerifyUserAccessToken, UserController.GetOrderByID)

module.exports = router;