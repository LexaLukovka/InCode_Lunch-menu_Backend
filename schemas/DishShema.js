const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/incode')

const DishSchema = mongoose.Schema({
  dish: String,
  images: String,
})

module.exports = DishSchema
