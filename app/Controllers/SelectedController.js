const Menu = require('../Models/Menu')

class SelectedController {
  async changeMenu(request, response) {
    console.log(request.body)
    const menu = await Menu.findOneAndUpdate(
      {

      }
      )
    console.log(menu)
    // return response.json({ menu: [menu] })
  }
}

module.exports = new SelectedController()
