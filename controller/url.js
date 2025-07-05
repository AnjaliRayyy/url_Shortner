const Url = require('../models/url');
const nanoid = require('nanoid').nanoid;



// Function to create a short URL
async function createShortUrl(req, res) {
    try {
        const originalUrl = req.body.originalUrl; // Get the original URL from the request body
        if(!originalUrl) {
            return res.status(400).json({msg: "Original URL is required"});
        }
        // Check if the original URL already exists in the database
        const existingUrl = await Url.findOne({ originalUrl: originalUrl });
        if (existingUrl) {  
            return res.json({msg: "URL already exists", shortUrl: existingUrl.shortUrl });
        }
        
        
        // If it doesn't exist, create a new short URL
        // Generate a short URL using nanoid   
        const shortUrl= nanoid(8); 
        await Url.create({
            originalUrl: originalUrl,
            shortUrl: shortUrl,
            visitHistory: [{ timestamp: Date.now(), clicks: 0 }]
        });
        res.render('home',{id : shortUrl}); // Render the home page after creating the short URL
        //  res.json({msg : "Short URL created successfully", shortUrl: shortUrl});

    } catch (error) {
        console.error('Error creating short URL:', error);
        throw error;
    }
}

//Function to handle URL redirection
async function redirectToOriginalUrl(req, res) {
    try {
        const entry = await Url.findOneAndUpdate(
            { shortUrl: req.params.shortUrl },
            { $push: { visitHistory: { timestamp: Date.now(), clicks: 1 } } },
            { new: true }
        );
        if (!entry) {
            return res.status(404).json({ msg: "Short URL not found" });
        }
        return res.redirect(entry.originalUrl);
    } catch (err) {
        return res.status(500).json({ msg: "Error in redirecting to original URL", error: err.message });
    }
}

//Function to get analytics for a short URL
async function getAnalytics(req,res){
    try{
        const shortUrl=req.params.shortUrl;
        const entry=await Url.findOne({shortUrl:shortUrl});
        if(!entry) return res.statrs(404).json({msg:"Short URL not found"});
        const analytics={
            TotalClicks : entry.visitHistory.length,
            Analytics : entry.visitHistory
        }
        return res.json(analytics);
    }
    catch(err){
        return res.status(500).json({msg:"Error in fetching analytics", error: err.message});
    }
}


module.exports = {createShortUrl, redirectToOriginalUrl, getAnalytics};