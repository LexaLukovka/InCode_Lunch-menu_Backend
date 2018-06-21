const mongoose = require('mongoose')
const db = require('../../database/connect')
const Schema = mongoose.Schema

const DishSchema = new Schema({
  dish: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Dish', DishSchema)
