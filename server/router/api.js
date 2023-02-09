const express = require('express');
const router = express.Router();

const minting = require('./minting/minting');

router.get('/', (req, res) => {
  console.log('hello');
  res.send('hello');
});

router.post('/contract/write', async(req,res,next)=>{

})

router.use('/minting', minting);

// router.post('/minting', async(req,res,next)=>{
//   console.log('minting');
//   res.send('minting');
// })
module.exports = router;
