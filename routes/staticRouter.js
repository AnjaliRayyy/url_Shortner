const express = require('express');
const router = express.Router();
const Url= require('../models/url'); // Import the Url model

router.get('/',async  (req, res) => {
    if(!req.user)   return res.redirect("/login");
    const allUrls = await Url.find({createdBy : req.user._id}); // Fetch all URLs from the database
    res.render('home', { urls: allUrls }); // Render the home page with the URLs
});

router.get('/signup', (req, res) => {
    res.render('signup'); // Render the signup page
})
router.get('/login', (req, res) => {
    res.render('login'); // Render the login page
})

module.exports=router;