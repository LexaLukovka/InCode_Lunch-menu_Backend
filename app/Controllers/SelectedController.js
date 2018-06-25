const Menu = require('../Models/Menu')
const Dish = require('../Models/Dish')

class SelectedController {
  async changeMenu(request, response) {

    const dish = await Dish.find({
      description: request.body.value,
    })

    const imag = dish.map(v => v.images)

    const menu = await Menu.update(
      {
        id: request.body.IndexMenu,
        'menu.dishes_id': request.body.indexDish
      },
      {
        '$set': {
          'menu.$.description': request.body.value,
          'menu.$.image': imag[0],
        }
      }
    )

    console.log(menu)
  }
}

module.exports = new SelectedController()
