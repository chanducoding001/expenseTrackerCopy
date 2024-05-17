const {Users} = require('../models/Users');


const verifyOtpController = async (req,res)=>{
    const {otp} = req.body;
    const user = await Users.findOne({otp});
    if(!user) return res.status(402).json({message:'User does not exist!'});
    if(+otp !== user.otp) return res.status(402).json({message:'Invalid OTP'});
    
    return res.status(200).json({message:'OTP verified successfully!',otp});
}

module.exports = {verifyOtpController};