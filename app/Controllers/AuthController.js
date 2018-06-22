const User = require('../Models/User')
const LoginValidator = require('../Validators/LoginUser')
const { validate } = require('../Validators/Validator')
const RegisterValidator = require('../Validators/RegisterUser')
const jwt = require('jsonwebtoken')
const config = require('../../config/database')

class AuthController {

  async login(request, response) {
    const [err, data] = await validate(request.body, LoginValidator)
    if (err) return response.status(401).json(err)

    const user = await User.findOne({ email: data.email })
    const token = jwt.sign(user, config.secret)

    return response.json({ token: 'JWT ' + token })
  }

  async register(request, response) {
    console.log(request.body)
    const [err, data] = await validate(request.body, RegisterValidator)
    if (err) return response.status(401).json(err)

    const newUser = new User({
      email: data.email,
      password: data.password,
      balance: 0,
    })

    const user = await newUser.save()

    const token = jwt.sign(user, config.secret)
    return response.json({ token: 'JWT ' + token })
  }
}

module.exports = new AuthController()
