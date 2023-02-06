const express = require('express');
const estateController = require('../controllers/estate.controller');
const estateRouter = express.Router();

estateRouter.get('/', estateController.getAllEstate);
estateRouter.post('/register', estateController.register);
estateRouter.post('/report', estateController.report);
module.exports = estateRouter;
