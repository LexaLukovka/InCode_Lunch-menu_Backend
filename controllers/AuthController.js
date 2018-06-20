const User = require('../models/UserModel')
const LoginValidator = require('../validators/LoginValidator')
const RegisterValidator = require('../validators/RegisterValidator')

class AuthController {
  async login(request, response) {

    const user = await User.find({
      email: request.body.email,
      password: request.body.password
    })

    if (!user.length) {
      return response
        .status(401)
        .json([{
          field: 'email',
          message: LoginValidator.messages['email.exists']
        }])
    }

    return response.json({ user })
  }

  async register(request, response) {

    const users = await User.find({ email: request.body.email })

    if (users.length) {
      return response.status(401).json([{
        field: 'email',
        message: RegisterValidator.messages['email.exists'],
      }])
    }

    const user = new User({
      email: request.body.email,
      password: request.body.password,
    })

    const savedUser = user.save()

    return response.json({ user: savedUser })
  }

}

module.exports = new AuthController()
