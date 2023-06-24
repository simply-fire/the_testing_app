const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({

    identity: {
        type: String
    },
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

userSchema.statics.login = async function (email, password) {

    const user = await this.findOne({ email })
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');

}

userSchema.statics.signup = async function (identity, email, userName, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ identity, email, userName, password: hash })

    return user
}


module.exports = mongoose.model('User-schema', userSchema)