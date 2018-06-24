const Menu = require('../Models/Menu')

class MenuController {
  async index(request, response) {
    const menu = await Menu.find({})
    return response.json({ menu })
  }

  async addMenu(request, response) {
    const menu1 = await new Menu(
      {
        id: 0,
        menu: [
          {
            dishes_id: 0,
            image: 'http://www.tomato-pizza.ru/image/uploaded/1425984970291181.jpg',
            description: 'Пицца',
          },
          {
            dishes_id: 1,
            image: 'http://www.menslife.com/upload/iblock/4be/piknik_po_korolevski_kak_prigotovit_idealnyy_shashlyk.jpg',
            description: 'Шашлык',
          },
          {
            dishes_id: 2,
            image: 'https://gotovim-edim.ru/upload/resize_cache/recipes/1d0/655_454_1/shefburger4.jpg',
            description: 'Бургер',
          },
          {
            dishes_id: 3,
            image: 'http://delovkusa.dp.ua/wp-content/uploads/2015/07/borsh.jpg',
            description: 'Борщ',
          },
        ]
      },
    )
    const menu2 = await new Menu(
      {
        id: 1,
        menu: [
          {
            dishes_id: 0,
            image: 'http://www.menslife.com/upload/iblock/4be/piknik_po_korolevski_kak_prigotovit_idealnyy_shashlyk.jpg',
            description: 'Шашлык',
          },
          {
            dishes_id: 1,
            image: 'http://www.tomato-pizza.ru/image/uploaded/1425984970291181.jpg',
            description: 'Пицца',
          },
          {
            dishes_id: 2,
            image: 'http://delovkusa.dp.ua/wp-content/uploads/2015/07/borsh.jpg',
            description: 'Борщ',
          },
          {
            dishes_id: 3,
            image: 'https://gotovim-edim.ru/upload/resize_cache/recipes/1d0/655_454_1/shefburger4.jpg',
            description: 'Бургер',
          },
        ]
      },
    )
    const menu3 = await new Menu(
      {
        id: 2,
        menu: [
          {
            dishes_id: 0,
            image: 'https://gotovim-edim.ru/upload/resize_cache/recipes/1d0/655_454_1/shefburger4.jpg',
            description: 'Бургер',
          },
          {
            dishes_id: 1,
            image: 'http://delovkusa.dp.ua/wp-content/uploads/2015/07/borsh.jpg',
            description: 'Борщ',
          },
          {
            dishes_id: 2,
            image: 'http://www.tomato-pizza.ru/image/uploaded/1425984970291181.jpg',
            description: 'Пицца',
          },
          {
            dishes_id: 3,
            image: 'http://www.menslife.com/upload/iblock/4be/piknik_po_korolevski_kak_prigotovit_idealnyy_shashlyk.jpg',
            description: 'Шашлык',
          },
        ]
      },
    )
    const menu4 = await new Menu(
      {
        id: 3,
        menu: [
          {
            dishes_id: 0,
            image: 'http://delovkusa.dp.ua/wp-content/uploads/2015/07/borsh.jpg',
            description: 'Борщ',
          },
          {
            dishes_id: 1,
            image: 'http://www.menslife.com/upload/iblock/4be/piknik_po_korolevski_kak_prigotovit_idealnyy_shashlyk.jpg',
            description: 'Шашлык',
          },
          {
            dishes_id: 2,
            image: 'https://gotovim-edim.ru/upload/resize_cache/recipes/1d0/655_454_1/shefburger4.jpg',
            description: 'Бургер',
          },
          {
            dishes_id: 3,
            image: 'http://www.tomato-pizza.ru/image/uploaded/1425984970291181.jpg',
            description: 'Пицца',
          },
        ]
      },
    )
    menu1.save()
    menu2.save()
    menu3.save()
    menu4.save()
  }

}

module.exports = new MenuController()
