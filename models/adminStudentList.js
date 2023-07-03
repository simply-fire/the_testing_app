const mongoose = require('mongoose');
// const { async } = require('regenerator-runtime');

const adminStudentList = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    section: {
        type: String
    },
    adminEmailId: {
        type: String
    }

})



adminStudentList.statics.read = async function (adminEmailId) {

    const class_A = await this.find({ adminEmailId, section: 'A' });
    const class_B = await this.find({ adminEmailId, section: 'B' });
    const class_C = await this.find({ adminEmailId, section: 'C' });

    const obj = { class_A, class_B, class_C };

    return obj;
}

adminStudentList.statics.write = async function (name, email, section, adminEmailId) {

    const PresenceCheck = await this.findOne({ email, section });
    if (PresenceCheck)
        throw Error('This Student already exists');

    const student = await this.create({ name, email, section, adminEmailId });

    return student;
}

module.exports = mongoose.model('adminStudentList', adminStudentList);
