const express = require('express');
// const { Signup } = require('../conrollers/Signup');
// const { verifyOtp } = require('../conrollers/Verify');
const { Login, Signup } = require('../controllers/loginSignup')
const requireAuth = require('../middlewares/authVerify')

const router = express.Router();
// router.use(requireAuth)

router
    .route('/signup')
    .post(Signup)

router.route('/login')
    .post(Login)
// .get((req, res) => { res.send("Abhi ruk na") });

module.exports = router;
