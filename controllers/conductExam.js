const quest = require('../models/questionPapers')
const scheduler = require('node-schedule')
const answers = require('../models/answerSheets')

exports.SubmitExam = async (req, res, next) => {

    const answerSheet = JSON.parse(req.body.ansSheet);
    const studentId = req.body.emailId;
    const testId = req.body.testId;
    console.log(answerSheet);
    console.log(studentId);
    console.log(testId);
    const sheet = await answers.write(answerSheet, testId, studentId);
    // res.json('dummy');
}
