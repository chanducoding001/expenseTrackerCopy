const {Users} = require('../models/Users');
const bcrypt = require('bcrypt');

const registerController = async (req,res)=>{
    console.log('body',req.body);

    const {email,password,name} = req.body;
    if(!email || !password || !name){
        return res.status(401).json({message:'All fields are required!'})
    }
    try{
        const user = await Users.findOne({email});
        //console.log("user",user);
    if(user) return res.status(402).json({message:'user already exists with this email'});
    const hashed = bcrypt.hashSync(password,10);
    const newUser = await Users.create({...req.body,password:hashed});
    if(newUser){
        return res.status(200).json({message:'user created successfully',data:newUser})
    }else{
        return res.status(500).json({message:'error in registering user'})
    }
    }catch(err){
        return res.status(500).json({message:'internal server error',error:err})
    }
}

module.exports = {registerController};