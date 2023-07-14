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

    const check = await this.findOne({ testId: testId, StudentId: studentId });
    if (check) {
        throw Error('Response Recorded')
    }
    const sheet = await this.create({ ansObject: ansObj, testId, StudentId: studentId });

    return sheet;

}

answerSheet.statics.read = async function (testId) {
    const peeps = await this.find({ testId });
    console.log(peeps);
    return peeps;
}

module.exports = mongoose.model('answerSheets', answerSheet);