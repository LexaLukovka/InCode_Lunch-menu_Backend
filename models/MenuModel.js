const mongoose = require('../database/connect')
const MenuSchema = require('../schemas/MenuSchema')

const MenuModel = mongoose.model('menu', MenuSchema)

module.exports = MenuModel
