const passport = require('passport')
require('../config/passport')(passport)
const express = require('express')
const router = express.Router()
const AuthController = require('../app/Controllers/AuthController')

router.post('/signup', AuthController.register)

router.post('/signin', AuthController.login)

module.exports = router
