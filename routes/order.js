const express = require('express')
const router = express.Router()

const OrderController = require('../app/Controllers/OrderController')

router.put('/order', OrderController.statistics)
router.post('/order', OrderController.index)
router.get('/order', OrderController.menu)

module.exports = router
