const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        // required:true
    },
    otp:{
        type:Number,
        default:0
    },
    token:String,
    googleId:String,
    image:String,
},{timestamps:true});

const Users = mongoose.model('User',userSchema);

module.exports = {Users};
