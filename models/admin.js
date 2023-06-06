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
        type: String
    }
})

module.exports = mongoose.model('Admin-schema', adminSchema)