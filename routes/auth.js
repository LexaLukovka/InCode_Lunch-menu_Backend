const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/signIn', AuthController.login)
router.post('/signUp', AuthController.register)

module.exports = router
