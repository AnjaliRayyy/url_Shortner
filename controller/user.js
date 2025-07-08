const Users=require('../models/user');
const {v4: uuidv4}=require('uuid')
const {authenticateToken} = require('../service/auth');

// Function to handle user sign-up
async function userSignUp(req,res) {
    const {username, email, password} = req.body;
    await Users.create({
        username,
        email,
        password,
    })
    console.log(req.body);
    return res.render('login', {message: 'User created successfully, please login'});
}

// Function to handle user login
async function isLoggedIn(req,res) {
    const {email, password} = req.body;
    const user=await Users.findOne({email, password});
    if(!user) {
        return res.render('login', { error: 'Invalid email or password' });
    }
    
    const token=authenticateToken(user);
    res.cookie("uid",token,{expires : new Date(Date.now() + 1800000), httpOnly: true});
    // res.json({token});
    // console.log(req.body)
    // console.log(token);
    // res.setHeader('authorization', `Bearer ${token}`);
    return res.redirect('/');
}

module.exports={userSignUp,isLoggedIn};