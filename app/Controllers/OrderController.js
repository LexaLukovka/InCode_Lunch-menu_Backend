const Order = require('../Models/Order')

class OrderController {
  async statistics(request, response) {
    const date = new Date()

    const createData = await Order.findOneAndUpdate(
      {
        date: `${date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()}`
      },
      {
        id: 1,
        date: `${date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()}`,
        number: (request.body.index + 1),
        description: request.body.value.map(value => value.description).join(', '),
      },
      {
        upsert: true,
      }
    )

    return response.json({ createData: [createData] })
  }

  async index(request, response) {
    const orders = await Order.find({})
    return response.json({ orders })
  }
}

module.exports = new OrderController()
