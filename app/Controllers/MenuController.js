const Menu = require('../Models/Menu')

class MenuController {
  async index(request, response) {
    const menu = await Menu.find({})
    return response.json({ menu: [menu] })
  }

  async addMenu(request, response) {
    const menu = await  new Menu({
        menu: [
          {
            image: request.body[0].dishesSelect[0].src,
            description: request.body[0].dishesSelect[0].description,
          },
          {
            image: request.body[1].dishesSelect[1].src,
            description: request.body[1].dishesSelect[1].description,
          },
          {
            image: request.body[2].dishesSelect[2].src,
            description: request.body[2].dishesSelect[2].description,
          },
          {
            image: request.body[3].dishesSelect[3].src,
            description: request.body[3].dishesSelect[3].description,
          },
        ]
      }
    )
    menu.save()
  }

}

module.exports = new MenuController()
