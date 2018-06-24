const mongoose = require('mongoose')
const db = require('../../database/connect')
const Schema = mongoose.Schema

const SelectControlSchema = new Schema({
  checked: {
    type: Boolean,
    required: true,
  },
})

module.exports = mongoose.model('selectControl', SelectControlSchema)
