const User = require('../Models/User')

class UsersController {
  async index(request, response) {
    const users = await User.find({})
    let counter = 0

    function createData(email, balance) {
      counter += 1
      return { id: counter, email, balance }
    }

    const user = []
    user.push(users.map(value =>
      createData(value.email, value.balance),
    ))
    return response.json({ user })
  }
}

module.exports = new UsersController()
