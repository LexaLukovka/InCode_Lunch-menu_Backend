const passport = require('passport')
require('../config/passport')(passport)
const express = require('express')
const router = express.Router()
const AuthController = require('../app/Controllers/AuthController')

router.post('/signUp', AuthController.register)
router.post('/signIn', AuthController.login)

module.exports = router
