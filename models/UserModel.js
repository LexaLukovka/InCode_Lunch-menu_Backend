const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/incode')
const UserSchema = require('../schemas/UserSchema')

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
