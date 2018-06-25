const User = require('../Models/User')
const jwt = require('jsonwebtoken')
const config = require('../../config/database')

class BalanceController {
  async change(request, response) {
    await User.findOneAndUpdate({ email: request.body.email }, { balance: request.body.value })
    const users = await User.findOne({ email: request.body.email })
    const token = jwt.sign(users, config.secret)
    return response.json({ token: 'JWT ' + token })
  }
}

module.exports = new BalanceController()
