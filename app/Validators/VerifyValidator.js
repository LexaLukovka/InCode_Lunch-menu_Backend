module.exports = class VerifyValidator {
  get rules() {
    return {
      email: 'required|email',
    }
  }

  get messages() {
    return {
      'email.required': 'Введите email пожалуйста',
      'email.email': 'Неправильный email',
    }
  }
}
