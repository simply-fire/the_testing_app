const express = require('express');
// const { Signup } = require('../conrollers/Signup');
// const { verifyOtp } = require('../conrollers/Verify');
const { Login, Signup } = require('../controllers/loginSignup')

const router = express.Router();

router
    .route('/signup')
    .post(Signup)

router.route('/login')
    .post(Login)
// .get((req, res) => { res.send("Abhi ruk na") });

module.exports = router;
