const express = require('express')
const { createExam } = require('../controllers/createExam')


const router = express.Router();

router
    .route('/createExam')
    .post(createExam)


module.exports = router;
