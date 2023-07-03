const mongoose = require('mongoose')


const studentQuizStatus = new mongoose.Schema({

    status: {
        type: String
    },
    quizId: {
        type: String
    }
})