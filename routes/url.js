const express = require('express');
const route=express.Router();
const { createShortUrl, redirectToOriginalUrl, getAnalytics, showHomePage } = require('../controller/url');

// Route to create a short URL
route.route('/').post(createShortUrl);


// Route to redirect to the original URL
route.route('/:shortUrl').get(redirectToOriginalUrl);


// Route to show analytics
route.route('/analytics/:shortUrl').get(getAnalytics);

// Route to show the home page
route.route('/').get(showHomePage);
module.exports=route;