const express = require('express');
const dmController = require('../controllers/dm.controller');
const dmRouter = express.Router();



// dmRouter.get('/load/:userId', dmController.gellAllDmroom);
dmRouter.get('/load/:userId', dmController.getAllDmroom);
dmRouter.get('/load/:dmroomId', dmController.loadDm);
dmRouter.post('/send/:dmroomId', dmController.sendDm);
dmRouter.post('/send/new', dmController.newDm);
module.exports = dmRouter;