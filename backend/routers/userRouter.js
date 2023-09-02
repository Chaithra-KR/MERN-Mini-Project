const express = require('express');
const User = express();
const userController = require('../controller/userController');
const upload = require('../Middleware/ImageValidation')


User.post("/register",userController.verifyRegister);
User.post("/login",userController.verifyLogin);
User.get("/profile",userController.Profile);
User.post("/updateImage",upload.single('image'),userController.uploadProfilePic);

module.exports = User;

