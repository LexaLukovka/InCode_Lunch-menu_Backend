const express = require('express')
const router = express.Router()

const VerifyEmail = require('../app/Controllers/VerifyEmailController')

router.post('/verifyEmail', VerifyEmail.check)
router.get('/verifyEmail', VerifyEmail.generateLink)

module.exports = router
