const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/incode')

const DishSchema = mongoose.Schema({
  menu: [
    {
      image: String,
      description: String,
    },
    {
      image: String,
      description: String,
    },
    {
      image: String,
      description: String,
    },
    {
      image: String,
      description: String,
    },
  ]
})

module.exports = DishSchema
