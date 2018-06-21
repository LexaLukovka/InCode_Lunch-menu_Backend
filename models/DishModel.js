const mongoose = require('../database/connect')
const DishSchema = require('../schemas/DishShema')

const DishModel = mongoose.model('dishes', DishSchema)

module.exports = DishModel
