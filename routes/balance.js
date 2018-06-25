const express = require('express')
const router = express.Router()

const BalanceController = require('../app/Controllers/BalanceController')

router.put('/balance', BalanceController.change)

module.exports = router
