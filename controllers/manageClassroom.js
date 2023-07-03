const studentlist = require('../models/adminStudentList');

exports.Read = async (req, res, next) => {

    try {

        const id = req.headers.email;
        // console.log(id);
        const out = await studentlist.read(id);
        if (out)
            res.status(200).json(out);
        else
            res.status(404).send('Data not found!!');

    } catch (error) {
        console.log(error);
    }
};

exports.Write = async (req, res, next) => {
    try {
        const { name, email, section, adminId } = req.body;
        const stuIn = await studentlist.write(name, email, section, adminId);

        res.status(200).json(stuIn);
    } catch (error) {
        console.log(error);
    }

}