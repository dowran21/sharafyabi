const express = require('express');
const router = new express.Router();
const UserController = require("../controllers/UserController")

router.post('/:lang/registration', UserController.UserRegistration);
router.post('/:lang/login', UserController.UserLogin)


module.exports = router;