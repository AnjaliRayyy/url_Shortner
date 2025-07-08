const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    role : {
        type : Array,
        required : true,
        default : ["NORMAL"],
    }
},{timestamps : true});

const Users=new mongoose.model('Users',userSchema);
module.exports=Users;