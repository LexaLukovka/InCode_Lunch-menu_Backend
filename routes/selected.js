const express = require('express')
const router = express.Router()

const SelectedController = require('../app/Controllers/SelectedController')

router.put('/selected', SelectedController.changeMenu)

module.exports = router
