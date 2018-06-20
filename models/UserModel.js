const mongoose = require('../database/connect')
const UserSchema = require('../schemas/UserSchema')

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
