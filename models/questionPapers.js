const mongoose = require('mongoose')
const lodash = require('lodash')


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
    },
    section: {
        type: String
    },
    title: {
        type: String
    }
})

questionPaperSchema.statics.getA = async function (keys) {

    // console.log(keys);
    const quizAarr = [];


    const final = keys.map(async (data, index) => {
        console.log(data.Keys);
        const instance = await this.find({ testId: data.Keys.testId, section: 'A' });

        if (lodash.flattenDeep(instance).length !== 0)
            return instance
    })

    const game = await Promise.all(final)
    var clean = game.filter((element) => { return element !== null })

    // console.log(clean);
    if (lodash.flattenDeep(clean).length === 0)
        return [];
    return clean;
}
questionPaperSchema.statics.getB = async function (keys) {

    // console.log(keys);
    const quizAarr = [];


    const final = keys.map(async (data, index) => {
        console.log(data.Keys);
        const instance = await this.find({ testId: data.Keys.testId, section: 'B' });
        if (lodash.flattenDeep(instance).length !== 0)
            return instance
    })

    const game = await Promise.all(final)
    var clean = game.filter((element) => { return element !== null })
    // console.log(clean);

    if (lodash.flattenDeep(clean).length === 0)
        return [];
    return clean;
}
questionPaperSchema.statics.getC = async function (keys) {

    // console.log(keys);
    const quizAarr = [];


    const final = keys.map(async (data, index) => {
        console.log(data.Keys);
        const instance = await this.find({ testId: data.Keys.testId, section: 'C' });
        if (lodash.flattenDeep(instance).length !== 0)
            return instance
    })

    const game = await Promise.all(final)
    var clean = game.filter((element) => { return element !== null })

    // console.log(clean);
    if (lodash.flattenDeep(clean).length === 0)
        return [];
    return game;
}

module.exports = mongoose.model('Question-paper-schema', questionPaperSchema)