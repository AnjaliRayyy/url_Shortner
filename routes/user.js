const express= require('express');
const router=express.Router();
const { userSignUp, isLoggedIn } = require('../controller/user');

router.post('/',userSignUp);
router.post('/login',isLoggedIn)
module.exports=router;