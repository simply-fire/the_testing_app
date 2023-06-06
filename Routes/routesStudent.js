const express = require('express')
const { conductExam } = require('../controllers/conductExam')

const router = express.Router()

router
    .route('/TakeExam')
    .get(conductExam)

module.exports = router;