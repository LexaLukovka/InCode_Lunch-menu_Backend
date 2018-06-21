const express = require('express')
const router = express.Router()

const DishController = require('../controllers/DishController')

router.get('/dishes', DishController.show)

module.exports = router
