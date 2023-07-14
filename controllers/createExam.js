const schedule = require('node-schedule');
const quest = require('../models/questionPapers');
const { Server } = require('socket.io');
const server = require('../index');
const { connect } = require('mongoose');

const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ["GET", "POST"],
    }
});


exports.createExam = async (req, res, next) => {
    try {

        // var  t = Card1;
        // console.log(req.headers);
        var testid = req.headers.testid;
        var datetime = req.headers.scheduledatetime + '+05:30'
        var title = req.headers.title
        var end = req.headers.end + '+05:30'
        var section = req.headers.section;
        var adminid = req.headers.adminid;
        // console.log(testid, datetime);
        var count = 1;
        // var i;
        // console.log(req.headers);
        for (i in req.body) {
            // console.log(i);
            if (req.body[i].Status !== "empty" && req.body[i].Type === "Subjective-question") {
                // console.log(req.body);
                const subQuest = new quest({
                    title: title,
                    testId: testid,
                    section: section,
                    questionType: req.body[i].Type,
                    question: req.body[i].Question,
                    questinNo: count,
                    adminId: adminid

                })

                await subQuest.save()
                    .then(() => { console.log("Success") })
                    .catch((err) => console.log(err))

                // res.send(count)
                count++;
            }
            else if (req.body[i].Status !== "empty" && req.body[i].Type === "Objective-question") {
                // console.log(req.body);

                const objQuest = new quest({
                    title: title,
                    testId: testid,
                    section: section,
                    questionType: req.body[i].Type,
                    question: req.body[i].Question,
                    questinNo: count,
                    option1: req.body[i].Option1,
                    option2: req.body[i].Option2,
                    option3: req.body[i].Option3,
                    option4: req.body[i].Option4,
                    adminId: adminid
                })

                await objQuest.save()
                    .then(() => { console.log("Success") })
                    .catch((err) => console.log(err))

                // res.send(count)
                count++;
            }
            // else
            //     res.send("end successful")
        }


        res.send("Questions Loded to Database successfully").status(200);

        scheduleExam(datetime, testid, title, end);

    } catch (error) {
        throw (error)
    }
}

const scheduleExam = async (dtt, testid, title, end) => {
    console.log('called this');
    schedule.scheduleJob(dtt, async () => {

        console.log(dtt, testid, end)
        const quesObject = await quest.find({ testId: `${testid}` });
        // quesObject.push({ endTime: end });
        quesObject.push({ title: title });
        console.log(quesObject);
        var flag = 0;
        io.on('connection', (socket) => {
            console.log(`User Connected: ${socket.id}`);

            if (flag === 0)
                socket.emit("rm", { quesObject, end })

            // socket.on('end-broadcast', () => {
            flag = 1;
            // })

            schedule.scheduleJob(end, async () => {
                console.log('well');
                socket.emit('rm', null);
                socket.emit("eq", "game begins");
                flag = 1;
                io.disconnectSockets();
                // socket.on()

            })
        });

    })
}
