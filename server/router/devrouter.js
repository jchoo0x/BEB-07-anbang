const express = require('express')

const User = require('../models/user');
const Estate = require('../models/estate');
const Dm = require('../models/dm');
const Dmroom = require('../models/dmroom');

const router = express.Router();

router.post('/signUp', async(req,res,next) => {
    console.log(req.body);
    const {email, password, nickname, name, phoneNumber, walletAddres, idNumber } = req.body;
    
   
        let user = await User.findOne({
            where : {
                [Op.or] : [{email}, {nickname}, {phoneNumber}, {walletAddres}, {idNumber}]
            } 
            })
        if(user){
            return res.json({errors : [{msg : 'User already Exists'}] });
        }

        try{
            const newUser = await User.create({
                email,
                password,
                nickname,
                name,
                phoneNumber,
                walletAddres,
                idNumber
            })
            return res.status(200).json(newUser);
        }
        catch(err){
        console.error(err.message);
        next(err);
    }
})

router.post('/login', async(req,res,next)=>{

})

router.post('/logout', async(req,res,next)=>{

})
router.post('/minting', async(req,res,next)=>{

})
router.post()
module.exports =router;