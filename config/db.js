const mongoose = require('mongoose');

async function connectDB(URL) {
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

module.exports = connectDB;