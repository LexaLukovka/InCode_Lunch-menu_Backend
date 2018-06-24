const mongoose = require('mongoose')
const db = require('../../database/connect')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    menu: [
      {
        id: Number,
        menu: [
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
        ]
      },
      {
        id: Number,
        menu: [
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
        ]
      },
      {
        id: Number,
        menu: [
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
        ]
      },
      {
        id: Number,
        menu: [
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
          {
            idDishes: Number,
            image: String,
            description: String,
          },
        ]
      },
    ]
  }
)

module.exports = mongoose.model('Menu', MenuSchema)
