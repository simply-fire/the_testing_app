// import adminAccessSuperKey from "../models/adminAccessSuperKey";
const adminAccessSuperKey = require('../models/adminAccessSuperKey')
const questionPaperSchema = require('../models/questionPapers')
const answerSheet = require('../models/answerSheets')

exports.ReadKeys = async (req, res, next) => {
    try {
        const adminId = req.headers.adminid;
        // const keys = req.headers.keys;

        const key = adminAccessSuperKey.read(adminId);

        res.status(200).json(key);
    }
    catch (err) {
        res.status(404).json(err);

    }

}

exports.WriteKeys = async (req, res, next) => {
    try {
        const adminId = req.body.adminid;
        const keys = req.body.keys;

        console.log(keys)
        const key = adminAccessSuperKey.write(adminId, keys);
        res.status(200).json(key);
    } catch (error) {
        res.status(404).json(error);

    }
}

exports.getSection_A_Data = async (req, res, next) => {
    try {
        const adminId = req.headers.adminid;
        console.log('the admin Id is ' + adminId);

        const keys = await adminAccessSuperKey.read(adminId);
        const section_A_Data = await questionPaperSchema.getA(keys);
        // const responses = await answerSheet.read(keys.testId);
        // console.log("Hey" + responses);

        res.status(200).json({ Qdata: section_A_Data });
    } catch (error) {
        res.status(404).json(error)
    }
}

exports.getSection_B_Data = async (req, res, next) => {
    try {
        const adminId = req.headers.adminid;
        console.log('the admin Id is ' + adminId);
        const keys = await adminAccessSuperKey.read(adminId);
        const section_B_Data = await questionPaperSchema.getB(keys);
        // const responses = await answerSheet.read(keys[0].testId);

        res.status(200).json({ Qdata: section_B_Data });
    } catch (error) {
        res.status(404).json(error)
    }

}
exports.getSection_C_Data = async (req, res, next) => {
    try {
        const adminId = req.headers.adminid;
        const keys = await adminAccessSuperKey.read(adminId);
        const section_C_Data = await questionPaperSchema.getC(keys);
        // const responses = await answerSheet.read(keys[0].testId);

        res.status(200).json({ Qdata: section_C_Data });
    } catch (error) {
        res.status(404).json(error)
    }

}

exports.getResponses = async (req, res, next) => {
    try {
        const testId = req.headers.testid;
        const responses = await answerSheet.read(testId);

        console.log(responses);
        res.status(200).json(responses);

    } catch (error) {
        res.status(404).json(error)
    }
}