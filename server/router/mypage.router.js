const express = require('express');
const mypageController = require('../controllers/mypage.controller');
const mypageRouter = express.Router();


mypageRouter.get('/:id', mypageController.mypage);
module.exports = mypageRouter;
