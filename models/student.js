const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

    studentId: {
        type: String,
    },
    userName: {
        type: String
    },
    email: {
        type: Number
    },
    password: {
        Type: String
    }
})

module.exports = mongoose.model('Student-schema', studentSchema)