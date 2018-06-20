const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/incode')

const db = require('../database/connect')
const User = require('../models/UserModel')

router.post('/', async (requst, response) => {

  const user = new User({
    email: requst.body.email,
    password: requst.body.password,
  })

  const savedUser = await user.save()

  response.json({ user: savedUser })
})

module.exports = router
