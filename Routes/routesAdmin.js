const express = require('express')
const { createExam } = require('../controllers/createExam')
const requireAuth = require('../middlewares/authVerify')
const { Read, Write } = require('../controllers/manageClassroom')
const { ReadKeys, WriteKeys, getSection_A_Data, getSection_B_Data, getSection_C_Data, getResponses } = require('../controllers/manageExamData')
const router = express.Router();

router.use(requireAuth)
// router.route('/adminDashboard').get()
// router.route('/stuDashboard').get()
// router.route('/stuDashboard/ExamConductor').get()
// router.route('/adminDashboard/createCustomQuiz').get()

router
    .route('/createExam')
    .post(createExam)

router.route('/Myclassroom/getStudents').get(Read);
router.route('/Myclassroom/addStudent').post(Write);
router.route('/verifyAdmin').post((req, res, next) => {
    try {
        res.status(200).json({
            identity: req.body.identity
        })
    } catch (error) {
        res.status(404).json(error)
    }
});
router.route('/appendkey').post(WriteKeys);
router.route('/getAdata').get(getSection_A_Data)
router.route('/getBdata').get(getSection_B_Data)
router.route('/getCdata').get(getSection_C_Data)
router.route('/responses').get(getResponses)


module.exports = router;
