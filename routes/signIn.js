var express = require('express')
var router = express.Router()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('were connected!')
})

const kittySchema = mongoose.Schema({
  name: String
})

kittySchema.methods.speak = function () {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name'
  console.log(greeting)
}
var Kitten = mongoose.model('Kitten', kittySchema)

const silence = new Kitten({ name: 'Silence' })
console.log(silence.name) // 'Silence'

var fluffy = new Kitten({ name: 'fluffy' })
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
