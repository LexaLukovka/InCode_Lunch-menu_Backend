const express = require('express')
const router = express.Router()
const kittySchema = require('../Schema/loginSchema')
const db = require('../Database/connect')
const mongoose = require('mongoose')

kittySchema.methods.speak = function () {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name'
  console.log(greeting)
}
const Kitten = mongoose.model('Kitten', kittySchema)

const silence = new Kitten({ name: 'Silence' })
console.log(silence.name) // 'Silence'

const fluffy = new Kitten({ name: 'fluffy' })
fluffy.speak()

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err)
  fluffy.speak()
})

Kitten.find(function (err, kittens) {
  if (err) return console.error(err)
  console.log(kittens)
})

Kitten.find({ name: /^fluff/ }, Kitten.find())

router.post('/', function (req, res) {
  console.log('Got a POST request')
  console.log('Req', req)
  console.log('Body', req.body)
  res.send('aa')
})

module.exports = router
