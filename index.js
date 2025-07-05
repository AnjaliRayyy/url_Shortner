const express = require('express')
const app=express();
const PORT=8000;
const connectDB = require('./config/db');
const router = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const path = require('path');

//Connect to MongoDB
connectDB('mongodb://127.0.0.1:27017/url_shortener')
.then(()=>{
    console.log('Connected to MongoDB');
}).catch((error)=>{
    console.error('Error connecting to MongoDB:', error);
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Seting view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

//Routes
app.use('/api/url', router);
app.use('/', staticRouter);


//Start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});