const express = require('express');
const router = express.Router();

const VerifyEmail = require('../app/Controllers/VerifyEmailController')

router.post('/verifyEmail', VerifyEmail.check)

module.exports = router;
