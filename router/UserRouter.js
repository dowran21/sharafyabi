const express = require('express');
const router = new express.Router();
const UserController = require("../controllers/UserController")
const {VerifyUserAccessToken} = require('../middleware/AuthMiddleware')

router.post('/:lang/registration', UserController.UserRegistration);
router.post('/:lang/login', UserController.UserLogin)

router.post('/:lang/add-to-wish-list/:id',VerifyUserAccessToken, UserController.AddToWishList)
router.post('/:lang/remove-from-wish-list/:id', VerifyUserAccessToken, UserController.RemoveFromWishList)

router.get('/:lang/get-orders', VerifyUserAccessToken, UserController.GetOrders);
router.get('/:lang/get-order/:id', VerifyUserAccessToken, UserController.GetOrderByID);

router.post('/:lang/create-comment/:product_id',  UserController.CreateComment)
router.post('/:lang/create-sub-comment/:product_id/:main_comment_id',  UserController.CreateSubComment)



module.exports = router;