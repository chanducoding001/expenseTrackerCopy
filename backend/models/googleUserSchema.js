const mongoose = require('mongoose');

const googleUsers = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    image:String,
},{timestamps:true});

const GoogleUsers = new mongoose.model('GoogleUser',googleUsers);

module.exports = {GoogleUsers};