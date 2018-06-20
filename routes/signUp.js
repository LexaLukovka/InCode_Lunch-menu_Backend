const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/incode')

const db = require('../database/connect')
const User = require('../models/UserModel')

router.post('/', async (request, response) => {

  const users = await User.find({ email: request.body.email })

  if (users.length) {
    response.status(401).json({ massages: 'Такой пользователь уже зарегистрирован!' })
  } else {
    const user = new User({
      email: request.body.email,
      password: request.body.password,
    })

    const savedUser = user.save()

    response.json({ user: savedUser })
  }
})

module.exports = router
