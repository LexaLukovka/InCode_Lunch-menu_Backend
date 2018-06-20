class LoginValidator {
  // noinspection JSUnusedGlobalSymbols
  get rules() {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages() {
    return {
      'email.exists': 'Такой пользователь уже зарегистрирован!',
    }
  }
}

module.exports = new LoginValidator()
