const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/incode')

const db = require('../database/connect')
const User = require('../models/UserModel')

router.post('/', async (request, response) => {
  const user = await User.find({ email: request.body.email })

  if (!user.length) {
    response.status(401).json({ massages: 'Такой пользователь уже зарегистрирован!' })
  }
})

module.exports = router
