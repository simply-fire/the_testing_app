const express = require('express')
const { createExam } = require('../controllers/createExam')
const requireAuth = require('../middlewares/authVerify')
const { Read, Write } = require('../controllers/manageClassroom')
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



module.exports = router;
