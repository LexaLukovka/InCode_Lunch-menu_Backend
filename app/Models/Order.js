const mongoose = require('mongoose')
const db = require('../../database/connect')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Order', OrderSchema)
