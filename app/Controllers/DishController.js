const Dish = require('../Models/Dish')

class DishController {
  async index(request, response) {
    const dish = await Dish.find({})
    return response.json({ dish: [dish] })
  }

  async store(request, response) {
    return response.json({ fake: 'POST' })
  }

  async show(request, response) {
    return response.json({ fake: 'GET', id: request.params.id })
  }

  async update(request, response) {
    return response.json({ fake: 'PUT', id: request.params.id })
  }

  async destroy(request, response) {
    return response.json({ fake: 'DELETE' })
  }
}

module.exports = new DishController()
