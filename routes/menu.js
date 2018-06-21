const express = require('express')
const router = express.Router()

const MenuController = require('../app/Controllers/MenuController')

router.get('/menu', MenuController.index)

module.exports = router
