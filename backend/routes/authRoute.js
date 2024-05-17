const express = require('express');
const {registerController} = require('../controllers/registerController');
const {loginController} = require('../controllers/loginController');
const { forgotPasswordController } = require('../controllers/forgotPasswordController');
const { verifyOtpController } = require('../controllers/verifyOtpController');
const { resetPasswordController } = require('../controllers/resetPasswordController');

const router = express.Router();

router.post('/signUp',registerController);
router.post('/login',loginController);
router.post('/forgotPassword',forgotPasswordController);
router.post('/verifyOtp',verifyOtpController);
router.post('/resetPassword',resetPasswordController);

module.exports = router;