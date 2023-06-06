const mongoose = require('mongoose')

const questionPaperSchema = new mongoose.Schema({

    testId: {
        type: String,
    },
    questionType: {
        type: String
    },
    questinNo: {
        type: Number
    },
    question: {
        type: String
    },
    option1: {
        type: String
    },
    option2: {
        type: String
    },
    option3: {
        type: String
    },
    option4: {
        type: String
    },
    ansObj: {
        type: String
    }
})

module.exports = mongoose.model('Question-paper-schema', questionPaperSchema)