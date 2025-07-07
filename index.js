const express = require('express')
const app=express();
const PORT=8000;
const connectDB = require('./config/db');
const path = require('path');
const cookieParser = require('cookie-parser');
const {restrictToLoggedInUser,checkAuth} = require('./middlewares/auth');
const router = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const userRouter = require('./routes/user');

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
app.use(cookieParser());

//Seting view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

//Routes
app.use('/api/url',restrictToLoggedInUser, router);
app.use('/',checkAuth, staticRouter);
app.use('/user', userRouter);


//Start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});