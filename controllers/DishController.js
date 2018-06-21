const Dish = require('../models/DishModel')

class DishController {
  async show(request, response) {

    const dish = await Dish.find({})
    console.log(dish)
    return response.json({ dish: [dish] })
  }
}

module.exports = new DishController()
