const mongoose = require('mongoose');

const answerSheet = new mongoose.Schema({
    ansObject: {
        type: JSON
    },
    testId: {
        type: String
    },
    StudentId: {
        type: String
    }

})

answerSheet.statics.write = async function (ansObj, testId, studentId) {

    const sheet = await this.create({ ansObj, testId, studentId });

    return sheet;

}

module.exports = mongoose.model('anserSheets', answerSheet);