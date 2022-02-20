const express = require('express');
const router = new express.Router();
const UserController = require("../controllers/UserController")
const {VerifyUserAccessToken, VerifyUserCodeTokenNext, VerifyAdminAccessToken} = require('../middleware/AuthMiddleware')

router.post('/:lang/registration', UserController.UserRegistration);
router.post('/:lang/login', UserController.UserLogin)
router.post('/:lang/forgot-password', UserController.ForgotPassword);
router.post('/:lang/change-password', VerifyUserCodeTokenNext, UserController.ChangePassword)
router.post('/:lang/update-user-profile', VerifyUserAccessToken, UserController.UpdateProfile)
router.post('/:lang/add-user-location', VerifyUserAccessToken, UserController.AddUserLocations)


router.post('/:lang/add-to-wish-list/:id',VerifyUserAccessToken, UserController.AddToWishList)
router.post('/:lang/remove-from-wish-list/:id', VerifyUserAccessToken, UserController.RemoveFromWishList)

router.get('/:lang/get-orders', VerifyUserAccessToken, UserController.GetOrders);
router.get('/:lang/get-order/:id', VerifyUserAccessToken, UserController.GetOrderByID);

router.post('/:lang/create-sub-comment/:product_id/:main_comment_id', VerifyUserAccessToken, UserController.CreateSubComment)
// router.post('/:lang/sub/:product_id/:main_comment_id', (req, res) => {console.log("hello world"); return res.status(200).send(true)})
router.post('/:lang/create-comment/:product_id', VerifyUserAccessToken, UserController.CreateComment)



module.exports = router;