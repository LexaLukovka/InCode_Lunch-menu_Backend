const User = require('../Models/User')
const VerifyValidator = require('../Validators/VerifyValidator')
const { validate } = require('../Validators/Validator')
const jwt = require('jsonwebtoken')
const config = require('../../config/database')

class VerifyEmailController {
  async check(request, response) {
    console.log(request.body.auth.user)
    const [err, data] = await validate(request.body.auth.user, VerifyValidator)
    if (err) return response.status(401).json(err)
    const user = await User.findOne({ email: data.email })
    const token = jwt.sign(user, config.secret)
    return response.json({ token: 'JWT ' + token })
  }

  async generateLink(request, response) {
    return response.json({
      url: 'http://localhost:3333/'+b
    })
  }
}

module.exports = new VerifyEmailController()
