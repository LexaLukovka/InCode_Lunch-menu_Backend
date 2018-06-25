const User = require('../Models/User')
const VerifyValidator = require('../Validators/VerifyValidator')
const { validate } = require('../Validators/Validator')
const jwt = require('jsonwebtoken')
const config = require('../../config/database')

class VerifyEmailController {
  async check(request, response) {
    const [err, data] = await validate(request.body, VerifyValidator)
    if (err) return response.status(401).json(err)
    await User.findOneAndUpdate(
      { email: data.email },
      { authorization: true },
    )
    const user = await User.findOne({ email: data.email })
    const token = jwt.sign(user, config.secret)
    console.log(token)
    return response.json({ token: 'JWT ' + token })
  }

  async generateLink(request, response) {
    return response.json({
      url: 'http://localhost:3000/verifyEmail'
    })
  }
}

module.exports = new VerifyEmailController()
