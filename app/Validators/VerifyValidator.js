module.exports = class VerifyValidator {
  get rules() {
    return {
      email: 'email|matches_verify',
    }
  }

  get messages() {
    return {
      'email.matches_verify': 'Hash не совпадает',
      'email.email': 'Неправильный email',
    }
  }
}
