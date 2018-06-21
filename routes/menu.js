const express = require('express')
const router = express.Router()

const MenuController = require('../controllers/MenuController')

router.get('/menu', MenuController.show)

module.exports = router
