const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/incode')

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  balance: Number,
})

module.exports = UserSchema

