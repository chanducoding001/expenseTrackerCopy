const {Users} = require('../models/Users');
const bcrypt = require('bcrypt');

const resetPasswordController = async (req,res)=>{
    
    try{

    const {otp,password} = req.body;
    if(!otp || !password) return res.status(400).json({message:'All fields are required!'});

    const oldUser = await Users.findOne({otp});
    if(!oldUser) return res.status(402).json({message:'User does not exist'});
    
    const hashedPwd = bcrypt.hashSync(password,10);
    const updatedUser = await Users.findOneAndUpdate({otp},{password:hashedPwd,otp:0});
    if(!updatedUser) return res.status(400).json({message:'Password did not reset as otp may not be valid'});
    return res.status(200).json({message:'Password updated successfully!'});

    }catch(err){
        console.log(err);
        return res.status(500).json({message:'Internal server error'})
    }
}

module.exports = {resetPasswordController};