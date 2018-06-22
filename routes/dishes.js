const express = require('express')
const router = express.Router()
// const auth = passport.authenticate('jwt', { session: false })

const DishController = require('../app/Controllers/DishController')

router.get('/dishes', DishController.index)
router.post('/dishes', DishController.store)
router.put('/dishes', DishController.update)
router.delete('/dishes', DishController.destroy)
// router.show('/dishes/:id', DishController.show)
// router.update('/dishes/:id', DishController.update)

module.exports = router
