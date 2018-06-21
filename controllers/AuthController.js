const User = require('../models/UserModel')
const LoginValidator = require('../validators/LoginValidator')
const RegisterValidator = require('../validators/RegisterValidator')

class AuthController {
  async login(request, response) {

    const userEmail = await User.find({
      email: request.body.email,
    })
    if (!userEmail.length) {
      return response
        .status(401)
        .json([{
          field: 'email',
          message: LoginValidator.messages['email.exists']
        }])
    }

    const user = await User.find({
      email: request.body.email,
      password: request.body.password
    })

    if (!user.length) {
      return response
        .status(401)
        .json([{
          field: 'password',
          message: LoginValidator.messages['password.exists']
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

    const user = await new User({
      email: request.body.email,
      password: request.body.password,
    })

    user.save()

    return response.json({ user: [user] })
  }

}

module.exports = new AuthController()
