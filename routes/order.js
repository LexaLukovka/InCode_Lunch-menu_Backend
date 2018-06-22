const express = require('express')
const router = express.Router()

const OrderController = require('../app/Controllers/OrderController')

router.post('/order', OrderController.statistics)

module.exports = router
