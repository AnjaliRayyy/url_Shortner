const express = require('express');
const router = express.Router();
const Url= require('../models/url'); // Import the Url model
const {restrictTo} = require('../middlewares/auth'); // Import authentication middleware

router.get('/admin/urls', restrictTo(["ADMIN"]), async (req, res) => {
    if(!req.user) return res.redirect("/login");
    try {
        const allUrls = await Url.find({}); // Fetch all URLs from the database
        res.render('home', { urls: allUrls }); // Render the admin page with the URLs
    } catch (error) {
        console.error('Error fetching URLs:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/',restrictTo(["NORMAL"]),async  (req, res) => {
    if(!req.user)   return res.redirect("/login");
    const allUrls = await Url.find({createdBy : req.user.id}); // Fetch all URLs from the database
    res.render('home', { urls: allUrls }); // Render the home page with the URLs
});

router.get('/signup', (req, res) => {
    res.render('signup'); // Render the signup page
})
router.get('/login', (req, res) => {
    res.render('login'); // Render the login page
})

module.exports=router;