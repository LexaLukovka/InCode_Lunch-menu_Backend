const User = require('../Models/User')

class BalanceController {
  async change(request, response) {
    const users = await User.findOneAndUpdate({email: request.body.email}, {balance: request.body.value})
    // const users = await User.findOneAndUpdate({email: request.body.email}, {balance: request.body.balance}, {upsert: true}, callback)
    console.log(users)
    // return response.json({ user })
  }
}

module.exports = new BalanceController()
