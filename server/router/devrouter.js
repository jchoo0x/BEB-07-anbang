const express = require('express')

const User = require('../models/user');
const Estate = require('../models/estate');
const Dm = require('../models/dm');
const Dmroom = require('../models/dmroom');
const {Op}= require('sequelize');
const devRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
            // const salt = await bcrypt.genSalt(5);
            // const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = await User.create({
                email,
                password, //: hashedPassword,
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
        const user = await User.findOne({
          where: {
            email,
            password,
          },
        });
        if (!user) {
          return res.status(400).send({ data: null, message: 'failed to login' });
        }
        const accessToken = jwt.sign(
            {
                email : user.email,
                nickname : user.nickname,
                createdAt:user.createAt,
                iat : Math.floor(Date.now()/1000),
                exp : Math.floor(Date.now() / 1000 )+ 60 *60,
            },
            process.env.ACCESS_SECRET
        );

        const refreshToken = jwt.sign(
            {
                email : user.email,
                nickname : user.nickname,
                createdAt:user.createAt,
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
        return res.status(200).json({
            message : 'logout successfully',
            status :'ok'
        })
    }catch(err){
        console.error(err);
        next(err);
    }
})
devRouter.post('/minting', async(req,res,next)=>{

})
devRouter.get('/estate', async(req,res,next)=> {

})

module.exports = devRouter;