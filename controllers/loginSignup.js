// const student = require('../models/student');
const user = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        // console.log(err);
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(val);
            // console.log(properties);
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: '3d' });
}

const maxAge = 3 * 24 * 60 * 60;

exports.Login = async (req, res, next) => {

    try {

        const { email, password, identity } = req.body;

        const User = await user.login(email, password);
        const token = createToken(User._id);
        // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: User._id, token, identity, email });

    } catch (err) {
        // const errors = handleErrors(err);
        // res.status(400).json({ errors });
        console.log(err);
    }

};

exports.Signup = async (req, res, next) => {

    try {
        const { identity, email, userName, password } = req.body;

        const User = await user.signup(identity, email, userName, password);
        const token = createToken(User._id);
        // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

        res.status(200).json({ user: User._id, token, identity, email });

    } catch (err) {
        console.log(err);
    }
}
