const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        unique: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    visitHistory: [{
        timestamp: { type: Number },
        clicks: { type: Number, default: 0 }
    }],
    createdBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }
}, { timestamps: true });

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;
