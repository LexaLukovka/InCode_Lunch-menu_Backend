const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/incode')

const kittySchema = mongoose.Schema({
  name: String,
})

module.exports = kittySchema
