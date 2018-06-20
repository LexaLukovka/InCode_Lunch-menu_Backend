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
      'email.exists': 'Пользователь с такой почтой на найден',
      'password.exists': 'Неверно введен пароль'
    }
  }
}

module.exports = new LoginValidator()
