const express = require('express')
// const { conductExam } = require('../controllers/conductExam')
const { SubmitExam } = require('../controllers/conductExam')

const router = express.Router()

router
    .route('/SubmitExam')
    .post(SubmitExam)

module.exports = router;