const express = require('express');
const userController = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.post('/signUp', userController.signUp);
userRouter.post('/login', userController.login);
userRouter.post('/logout', userController.logout);
userRouter.get('/valid', userController.valid);
module.exports = userRouter;
