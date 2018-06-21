const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/signIn', AuthController.login)
router.post('/signUp', AuthController.register)
router.get('/signUp', AuthController.show)

module.exports = router
