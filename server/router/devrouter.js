const express = require('express')

const User = require('../models/user');
const Estate = require('../models/estate');
const Dm = require('../models/dm');
const Dmroom = require('../models/dmroom');
const {Op}= require('sequelize');
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken');
const { sequelize } = require('../models');

const devRouter = express.Router();
require('dotenv').config();


devRouter.get('/', async(req,res)=>{
    res.send('dev page')
    console.log('dev page')
})

devRouter.post('/signUp', async(req,res,next) => {
    console.log(req.body);
    const {email, password, nickname, name, phoneNumber, walletAddress, idNumber } = req.body;
    
    // 1. 중복email
        const usedEmail = await User.findOne({
            where : {email} 
            })
        if(usedEmail){
            return res.json({errors : [{msg : 'This email already Exists'}] });
        }

    // 2. 중복 Nickname
    const usedNickname = await User.findOne({
        where : {nickname} 
        })
    if(usedNickname){
        return res.json({errors : [{msg : 'This nickname already Exists'}] });
    }

    // 3.중복 전화번호
    const usedPhoneNumber = await User.findOne({
        where : {phoneNumber} 
        })
    if(usedPhoneNumber){
        return res.json({errors : [{msg : 'This phoneNumber already Exists'}] });
    }
    // 4. 중복 지갑주소
    const usedWalletAddress = await User.findOne({
        where : {walletAddress} 
        })
    if(usedWalletAddress){
        return res.json({errors : [{msg : 'This walletAddress already Exists'}] });
    }
    //5. 중복 idNumber
    const usedIdNumber = await User.findOne({
        where : {idNumber} 
        })
    if(usedIdNumber){
        return res.json({errors : [{msg : 'This idNumber already Exists'}] });
    }

        try{
            //비밀번호 암호화
            // const password = req.body.password;
            
            // const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = await User.create({
                email,
                password, 
                nickname,
                name,
                phoneNumber,
                walletAddress,
                idNumber
            })
            return res.status(200).json(newUser);
        }
        catch(err){
        console.error(err.message);
        next(err);
    }
})

devRouter.post('/login', async(req,res,next)=>{
    try {
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({ data: null, message: 'Invalid input' });
        }
        const userData = await User.findOne({
          where: {
            email
          },
        });
        if (!userData) {
          return res.status(400).send({ data: null, message: 'no user' });
        }

        const match = await bcrypt.compare(password, userData.password);
        if (!match) {
          return res.status(400).send('user password invalid');
        }else{
            const accessToken = jwt.sign(
             {
                email : userData.email,
                nickname : userData.nickname,
                createdAt:userData.createAt,
                iat : Math.floor(Date.now()/1000),
                exp : Math.floor(Date.now() / 1000 )+ 60 *60,
             },
                process.env.ACCESS_SECRET
        );

        const refreshToken = jwt.sign(
            {
                email : userData.email,
                nickname : userData.nickname,
                createdAt:userData.createAt,
                iat : Math.floor(Date.now()/1000),
                exp : Math.floor(Date.now() / 1000 )+ 60 *60,
            },
            process.env.REFRESH_SECRET
        );

        res.cookie('refreshToken', refreshToken, {
            maxAge: 10000,
            sameSite: true,
            secure: true,
            httpOnly: true,
          });

          res
          .status(200)
          .json({data: {accessToken : accessToken}, message : 'login complete'})
        }
    }catch(err){
        console.error(err.message);
        next(err);
    }
})

devRouter.post('/logout', async(req,res,next)=>{
    try{
        if(!req.cookies.refreshToken){
            return res
            .status(200)
            .json({messgage : 'no refresh token', status:'ok'});
        }
        res.clearCookie('refeshToken', {
            sameSite :'none',
            secure: true,
            maxAge : 1,
            httpOnly : true,
        });
        return res
        .status(200).json({
            message : 'logout successfully',
            status :'ok'
        })
    }catch(err){
        console.error(err);
        next(err);
    }
})

devRouter.post('/register', async(req,res,next)=>{
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json({ data: null, message: 'invalid access token' });
    }
    try{
        const token = authorization.split(' ')[1];
        const data =jwt.verify(token,process.env.ACCESS_SECRET);
        if(data){
            const {types, deposit, rental, conditions} = req.body;
        
            if (!types || !deposit || !rental || !conditions) {
                return res.status(400).json({ data: null, message: 'Invalid input' });
            }
            
            const newEstate = await Estate.create({
                types,
                deposit,
                rental,
                conditions
            })
        return res.status(200).json(newEstate);
        }
    }catch(err){
        console.error(err.message);
        next(err);
      }
})

devRouter.get('/estate', async(req,res,next)=> {
    try {
        const estates = await Estate.find({}); // 
  
        res.json(estates);
      } catch (err) {
        console.error(err);
        next(err);
      }
})

//DM방 목록 가져오기
devRouter.get('/dm/user/:userId',async(req,res,next)=>{
    
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json({ data: null, message: 'invalid access token' });
    }
    try{
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

    }catch(err){
        console.error(err.message)
        next(err)
    }
})

//DM방 내 DM 불러오기
devRouter.get('/dm/load/:dmroomId', async(req,res,next)=>{
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json({ data: null, message: 'invalid access token' });
    }
    try{
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
        });
    }catch(err){
        console.error(err.message)
        next(err)
    }
});

//DM방 내에서 DM 보내기
devRouter.post('/dm/send/:dmroomId', async (req,res,next) => {
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json({ data: null, message: 'invalid access token' });
    }
    //dm 발송에 따른 테이블 내용 변경
    const transaction = await sequelize.transaction();
    try{
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
        );
    }catch(err){
        await transaction.rollback();
        console.error(err.message)
    }
})

//새로운 DM 발송
devRouter.post('/newdm', async(req,res,next)=>{
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json({ data: null, message: 'invalid access token' });
    }

    const transaction = await sequelize.transaction();
    try{
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
    }catch(err){
        console.error(err.message)
    }
})

    
module.exports = devRouter;