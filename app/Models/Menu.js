const mongoose = require('mongoose')
const db = require('../../database/connect')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
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

module.exports = db.model('Menu', MenuSchema)
