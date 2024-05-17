const nodemailer = require('nodemailer');
const {Users} = require('../models/Users');

const forgotPasswordController = async (req,res)=>{
    try {
        const {email} = req.body;
        console.log('email',email);
        const oldUser = await Users.findOne({email});
        if(!oldUser)return res.status(400).json({message:'User does not exist!'});
        const otp = Math.floor(Math.random() * 10000);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false, //true for 463 and false for other ports
        auth: {
            user: process.env.GMAIL,   //your-email@gmail.com
            pass: process.env.PASSWORD //your-email-password
        }
    });
      const info = await transporter.sendMail({
        from:{
            name:'Chandu',
            address:process.env.GMAIL
        }, // sender address
        to: email, // list of receivers
        subject: "New OTP is generated!", // Subject line
        text: "Forgot password", // plain text body
        html: `<b>Here is the new generated OTP: ${otp}</b>`, // html body
        //attachments:{}  //to send attachments such as files
        //cc:
        //bcc:
      });
      if(info.messageId){
        const updatedUser = await Users.findOneAndUpdate({email},{otp});
        if(!updatedUser) return res.status(400).json({message:'email does not match!'});
        return res.status(200).json({message:'Email is verified and otp is generated successfully!'});
      }
    } catch (error) {
        return res.status(500).json({message:'Error occured',error})
    }
    
}

module.exports = {forgotPasswordController};