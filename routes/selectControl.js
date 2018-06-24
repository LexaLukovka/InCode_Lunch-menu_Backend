const express = require('express')
const router = express.Router()

const SelectControlController = require('../app/Controllers/SelectControlController')

router.put('/selectControl', SelectControlController.selectControl)

module.exports = router
