const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({

    adminId: {
        type: String,
    },
    adminName: {
        type: String
    },
    email: {
        type: Number
    },
    password: {
        type: password
    }
})

module.exports = mongoose.model('Admin-schema', adminSchema)