const express = require('express')
const router = express.Router()

const OrderController = require('../app/Controllers/OrderController')

router.put('/order', OrderController.statistics)
router.get('/order', OrderController.index)

module.exports = router
