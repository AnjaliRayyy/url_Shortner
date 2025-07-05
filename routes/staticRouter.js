const express = require('express');
const router = express.Router();
const Url= require('../models/url'); // Import the Url model

router.get('/',async  (req, res) => {
    const allUrls = await Url.find({}); // Fetch all URLs from the database
    res.render('home', { urls: allUrls }); // Render the home page with the URLs
});

module.exports=router;