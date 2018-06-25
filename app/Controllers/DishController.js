const Dish = require('../Models/Dish')

class DishController {
  async index(request, response) {

    const dish = await Dish.find({})

    return response.json({ dish: [dish] })
  }

  async store() {

    const dish1 = await new Dish({
      id: 0,
      description: 'Шашлык',
      images: 'http://www.menslife.com/upload/iblock/4be/piknik_po_korolevski_kak_prigotovit_idealnyy_shashlyk.jpg',
    })

    const dish2 = await new Dish({
      id: 1,
      description: 'Пицца',
      images: 'http://www.tomato-pizza.ru/image/uploaded/1425984970291181.jpg',
    })

    const dish3 = await new Dish({
      id: 2,
      description: 'Бургер',
      images: 'https://gotovim-edim.ru/upload/resize_cache/recipes/1d0/655_454_1/shefburger4.jpg',
    })

    const dish4 = await new Dish({
      id: 3,
      description: 'Борщ',
      images: 'http://delovkusa.dp.ua/wp-content/uploads/2015/07/borsh.jpg',
    })

    dish1.save()
    dish2.save()
    dish3.save()
    dish4.save()

  }
}

module.exports = new DishController()
