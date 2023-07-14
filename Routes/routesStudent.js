const express = require('express')
// const { conductExam } = require('../controllers/conductExam')
const { SubmitExam } = require('../controllers/conductExam')
const requieAuth = require('../middlewares/authVerify')
const router = express.Router()
router.use(requieAuth)

router
    .route('/SubmitExam')
    .post(SubmitExam)

module.exports = router;