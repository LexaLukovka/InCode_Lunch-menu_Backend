const Menu = require('../Models/Menu')

class MenuController {
  async index(request, response) {
    const menu = await Menu.find({})
    return response.json({ menu: [menu] })
  }

}

module.exports = new MenuController()
