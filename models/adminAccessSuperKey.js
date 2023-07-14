const mongoose = require('mongoose')

const adminAccessSuperkey = new mongoose.Schema({
    adminId: {
        type: String
    },
    Keys: {
        testId: {
            type: String
        },
        section: {
            type: String
        }
    }

})

adminAccessSuperkey.statics.read = async function (adminId) {
    const adminKeys = await this.find({ adminId });
    if (!adminKeys) {
        throw Error('No cred Found');
    }

    return adminKeys;
}

adminAccessSuperkey.statics.write = async function (adminId, Keys) {

    const instace = await this.create({ adminId, Keys })

    return instace;
}

module.exports = mongoose.model('adminAccessSuperKey', adminAccessSuperkey)