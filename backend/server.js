require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {dbConnection} = require('./config/dbConnection');
const {Users} = require('./models/Users');
const authRoute = require('./routes/authRoute');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const Oauth2Strategy = require('passport-google-oauth2').Strategy;
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const {forgotPasswordController} = require('./controllers/forgotPasswordController');

dbConnection();
const app = express();
const clientId = `1063344002570-mr5or7evojpbrnk2kihpgs9gf0mcnp5k.apps.googleusercontent.com`;
const clientSecret = `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`;

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use(session({
    resave:false,
    secret:'123123354645fdgdf44353',
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Oauth2Strategy({
    clientID:clientId,
    clientSecret:clientSecret,
    callbackURL:'/auth/google/callback',
    passReqToCallback   : true,
    scope:["profile","email"]
},async (req,accessToken,refreshToken,profile,done)=>{
    // console.log("profile",profile);
    try {
        let user = await Users.findOne({googleId:profile.id});
        if(!user){
            const token = jwt.sign({
                email:profile.emails[0].value,
                name:profile.displayName
            },process.env.TOKEN,{expiresIn:30*60});

            user = new Users({
                googleId:profile.id,
                name:profile.displayName,
                email:profile.emails[0].value,
                image:profile.photos[0].value,
                token
            });
            await user.save();
        }
        return done(null,user)
    } catch (error) {
        done(error,null);
    }
}
))

passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((user,done)=>{
    done(null,user);
});
app.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
app.get('/auth/google/callback',passport.authenticate('google',{
    successRedirect:'http://localhost:3000/home',
    failureRedirect:'http://localhost:3000/login'
}));

app.use('/',authRoute);

mongoose.connection.once('open',()=>{
    console.log('connected to mongodb successfully!');
    app.listen(port,()=>{
        console.log('server started at port ',port);
    })
})

