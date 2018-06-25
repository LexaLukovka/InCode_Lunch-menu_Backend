const express = require('express')
const router = express.Router()
// const auth = passport.authenticate('jwt', { session: false })

const DishController = require('../app/Controllers/DishController')

router.get('/dishes', DishController.index)
router.post('/dishes', DishController.store)

module.exports = router
