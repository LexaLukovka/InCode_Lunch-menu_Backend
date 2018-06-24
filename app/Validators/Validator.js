const indicative = require('indicative')
const User = require('../Models/User')
const to = require('../../utils/to')
const validator = {
  ...indicative,
  extend(rule, fn) {
    if (typeof (fn) !== 'function') {
      throw 'Validator.extend expects 2nd parameter to be a function'
    }
    indicative.validations[rule] = fn
  },

  async validate(data, validatorClass) {
    const validator = new validatorClass
    const [err, response] = await to(indicative.validate(
      { ...data },
      validator.rules,
      validator.messages
    ))

    return [err, response]
  }
}

const uniqueEmailFn = async (data, field, message, args, get) => {
  const value = get(data, field)
  if (!value) return
  const user = await User.findOne({ email: value })
  if (user) throw message
}

const matchesEmailFn = async (data, field, message, args, get) => {
  const value = get(data, field)
  if (!value) return
  const user = await User.findOne({ email: data.email })
  if (!user) throw message

  user.comparePassword(data.password, message, function (err, isMatch) {
    if (!isMatch && err) return message
  })
}

const emailExistsFn = async (data, field, message, args, get) => {
  const value = get(data, field)
  if (!value) return
  const user = await User.findOne({ email: data.email })
  if (!user) throw message
}

validator.extend('uniqueEmail', uniqueEmailFn)
validator.extend('matchesEmail', matchesEmailFn)
validator.extend('emailExists', emailExistsFn)

module.exports = validator