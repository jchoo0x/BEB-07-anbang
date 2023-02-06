const TenantAgreement =require('../models/tenantagreement');
const OwnerAgreement = require('../models/owneragreement');
const Estate = require('../models/estate');
const jwt = require('jsonwebtoken');
const {Op} = require('sequelize');
const {sequelize} = require('../models')

require('dotenv').config()

module.exports= {
   ownercheck: async(req,res,next)=>{
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json({ data: null, message: 'invalid access token' });
    }
    try{
        const token = authorization.split(' ')[1];
        const data =jwt.verify(token,process.env.ACCESS_SECRET);
        if(data){
            const {ownerAgreement} = req.body;
            // const ownerestateId = await Estate.findOne({
            //     attributes: [owner],
            //     where: {}
            // })
                if (!ownerAgreement) {
                    return res.status(400).json({ data: null, message: 'Invalid input' });
                }
                
                const newOwnerAgreement = await OwnerAgreement.create({
                    ownerAgreement,
                    ownerId : data.id,
                    // ownerestateId : ownerestateId,
                })
            return res.status(200).json(newOwnerAgreement);
        }

   }catch(err){
    console.error(err)
    next(err)
   }
},
tenantcheck: async(req,res,next)=>{
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json({ data: null, message: 'invalid access token' });
    }
    try{
        const token = authorization.split(' ')[1];
        const data =jwt.verify(token,process.env.ACCESS_SECRET);
        if(data){
            const {tenantAgreement} = req.body;
            
                if (!tenantAgreement) {
                    return res.status(400).json({ data: null, message: 'Invalid input' });
                }
                
                const newTenantAgreement = await TenantAgreement.create({
                    TenantAgreement,
                    tenantId : data.id,
                    
                })
            return res.status(200).json(newTenantAgreement);
        }

   }catch(err){
    console.error(err)
    next(err)
   }
},
   write: async(req,res,next)=>{
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json({ data: null, message: 'invalid access token' });
    }
    try{
        const token = authorization.split(' ')[1];
        const data =jwt.verify(token,process.env.ACCESS_SECRET);
        if(data){
            return res.status(200).json({data: "test"})
        }
   }catch(err){
        console.error(err)
        next(err)
    }
    }
}