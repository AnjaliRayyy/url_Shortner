const Users=require('../models/user');
const {v4: uuidv4}=require('uuid')
const {setUser} = require('../service/auth');
async function userSignUp(req,res) {
    const {username, email, password, isAdmin} = req.body;
    await Users.create({
        username,
        email,
        password,
        isAdmin
    })
    return res.render('login', {message: 'User created successfully, please login'});
}
async function isLoggedIn(req,res) {
    const {email, password} = req.body;
    const user=await Users.findOne({email, password});
    if(!user) {
        return res.render('login', { error: 'Invalid email or password' });
    }
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid",sessionId)
    return res.redirect('/');
}

module.exports={userSignUp,isLoggedIn};