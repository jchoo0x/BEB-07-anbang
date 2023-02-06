const Dm =require('../models/dm');
const Dmroom = require('../models/dmroom');
const jwt = require('jsonwebtoken');
const {Op} = require('sequelize');
const {sequelize} = require('../models')

require('dotenv').config()

module.exports= {
   getAllDmroom : async(req,res,next)=>{
        const authorization = req.headers['authorization'];
        if (!authorization) {
            return res.status(400).json({ data: null, message: 'invalid access token' });
        }
        try{
         //로그인 확인
          const token = authorization.split(' ')[1];
          // console.log(token);
          const data = jwt.verify(token, process.env.ACCESS_SECRET);
          //로그인이 돼있다면
          if(data){
            await Dmroom.findAll({
                include : [{
                    model : User,
                    required: true,
                    include : [
                        {
                            model : Estate,
                            required : true
                        }
                    ]
                }],
                where :{
                    [Op.or] : [
                        {'$estate.owner' : req.params.userId},
                        {buyUserId : req.params.userId}
                    ]
                },
                order :[
                    ['updatedAt', 'DESC']
                ]
            }).then(function (result){
                return res.status(200).json({chat:result})
            })
        }
        }catch(err){
            console.error(err.message)
            next(err)
        }
    },
    
    //DM방 내 DM 불러오기
    loadDm : async(req,res,next)=>{
        const authorization = req.headers['authorization'];
        if (!authorization) {
            return res.status(400).json({ data: null, message: 'invalid access token' });
        }
        try{
             //로그인 확인
          const token = authorization.split(' ')[1];
          // console.log(token);
          const data = jwt.verify(token, process.env.ACCESS_SECRET);
          //로그인이 돼있다면
          if(data){
            await Dm.findAll({
                include : [
                    {
                        model : User,
                        required : true
                    }
                ],
                where : {
                    dmroomId : req.params.dmroomId
                },
                order : [
                    ['createdAt', 'ASC']
                ]
            }).then(function(result){
                return res.status(200).json({messages : result})
            })
        };
        }catch(err){
            console.error(err.message)
            next(err)
        }
    },
    
    //DM방 내에서 DM 보내기
    sendDm : async (req,res,next) => {
        const authorization = req.headers['authorization'];
        if (!authorization) {
            return res.status(400).json({ data: null, message: 'invalid access token' });
        }
        //dm 발송에 따른 테이블 내용 변경
        const transaction = await sequelize.transaction();
        try{
             //로그인 확인
          const token = authorization.split(' ')[1];
          // console.log(token);
          const data = jwt.verify(token, process.env.ACCESS_SECRET);
          //로그인이 돼있다면
          if(data){
            await Dmroom.update(
                {lastchat : req.body.message},
                {where : {id: req.params.dmroomId}}
                ,{transaction : transaction}
            );
            
            await Dm.create({
                messages : req.body.message,
                userId : req.body.userId,
                dmroomId : req.body.dmroomId
            }, {transaction : transaction}
            )
        }
        }catch(err){
            await transaction.rollback();
            console.error(err.message)
        }
    },
    
    //새로운 DM 발송
    newDm : async(req,res,next)=>{
        const authorization = req.headers['authorization'];
        if (!authorization) {
            return res.status(400).json({ data: null, message: 'invalid access token' });
        }
    
        const transaction = await sequelize.transaction();
        try{
          //로그인 확인
          const token = authorization.split(' ')[1];
          // console.log(token);
          const data = jwt.verify(token, process.env.ACCESS_SECRET);
          //로그인이 돼있다면
          if(data){
            const newDmroom = await Dmroom.create({
                lastchat : "",
                buyUserId: req.body.buyUserId,
                estateId: req.body.estateId
            }, {transaction : transaction}
            );
    
            await sequelize.query(
                'UPDATE estates SET dmroomCount = (SELECT CONUT (*) dmrooms WHERE estateId = ${req.body.estateId} WHERE id = ${req.body.estateId}',
                {transaction : transaction}
            );
    
            await transaction.commit.then(function (result){
                return res.status(201).json({dmroomId : newDmroom.id})
            })
          };
        }catch(err){
            console.error(err.message)
            next(err)
        }
    }
}