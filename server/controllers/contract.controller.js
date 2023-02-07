const TenantAgreement =require('../models/tenantagreement');
const OwnerAgreement = require('../models/owneragreement');
const Estate = require('../models/estate');
const jwt = require('jsonwebtoken');
const {Op} = require('sequelize');
const {sequelize} = require('../models')

require('dotenv').config()

module.exports= {
    tenantcheck: async(req,res,next)=>{
        const authorization = req.headers['authorization'];
        if (!authorization) {
            return res.status(400).json({ data: null, message: 'invalid access token' });
        }
        try{
            const token = authorization.split(' ')[1];
            const data =jwt.verify(token,process.env.ACCESS_SECRET);
            if(data){
                const {tenantAgreement, tenantestateTokenId} = req.body;
                
                    if (!tenantAgreement || !tenantestateTokenId) {
                        return res.status(400).json({ data: null, message: 'Invalid input' });
                    }
    
                    const newTenantAgreement = await TenantAgreement.create({
                        tenantAgreement,
                        tenantId : data.id,
                        tenantestateTokenId,
                    })
                    // 부동산에 임차인 계약요청으로 업데이트
                    await Estate.update({
                        contractor : data.id,
                    },{
                        where : {id : newTenantAgreement.tenantestateTokenId}
                    })
                return res.status(200).json(newTenantAgreement);
            }
    
       }catch(err){
        console.error(err)
        next(err)
       }
    },
    
   ownercheck: async(req,res,next)=>{
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json({ data: null, message: 'invalid access token' });
    }
    try{
        const token = authorization.split(' ')[1];
        const data =jwt.verify(token,process.env.ACCESS_SECRET);
        if(data){
            const {ownerAgreement, ownerestateTokenId} = req.body;
      
                if (!ownerAgreement || !ownerestateTokenId) {
                    return res.status(400).json({ data: null, message: 'Invalid input' });
                }
                
                const newOwnerAgreement = await OwnerAgreement.create({
                    ownerAgreement,
                    ownerId : data.id,
                    ownerestateTokenId
                })
            return res.status(200).json(newOwnerAgreement);
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
            const contractEstate = await Estate.findOne({
                include :[{
                    model : TenantAgreement,
                    as: 'tenantAgreement',
                    where : {
                        tenantestateTokenId
                    },
                    attributes : ['tenantAgreement']
                },
                {
                    model : OwnerAgreement,
                    as: 'ownerAgreement',
                    where : {
                        ownerestateTokenId
                    },
                    attributes : ['ownerAgreement']
                }
                ]
            })
            return res.status(200).json({data: contractEstate, message : "contract Success"})
        }
   }catch(err){
        console.error(err)
        next(err)
    }
    }
}