const express = require('express');
const contractController = require('../controllers/contract.controller');
const contractRouter = express.Router();

contractRouter.post('/ownercheck', contractController.ownercheck);
contractRouter.post('/tenantcheck', contractController.tenantcheck);
contractRouter.get('/write', contractController.write);
module.exports = contractRouter;
