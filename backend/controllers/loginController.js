const {Users} = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(401).json({message:'All fields are required!'})
    }
    try{
        const user = await Users.findOne({email});
    if(!user) return res.status(402).json({message:'user with this email is not registered!'});
    const match = bcrypt.compareSync(password,user.password)
    
    if(!match){
        return res.status(400).json({message:'password does not match'})
    }
    //send jwt
    const token = jwt.sign({email,username:user.name},process.env.TOKEN,{expiresIn:30*60});;
    
    //generate access as well as refresh tokens and send access token to frontend
    //store refrsh token inside db
    //it is useful when access token is expired and to generate new access token
    // while sending new access token generate new refresh token and store inside db
    //while using both tokens http only cookie is issued other wise no use
    //axios interceptors intercept this access token expiry and send a new request for new token 

    return res.status(200).json({message:'user logged in successfully!',data:{token}})
    }catch(err){
        console.log(err);
        return res.status(500).json({message:'internal server error',error:err})
    }
}

module.exports = {loginController};
