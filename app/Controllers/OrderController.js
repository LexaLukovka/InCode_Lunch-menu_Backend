const Order = require('../Models/Order')

class OrderController {
  async statistics(request, response) {
    const date = new Date()
    const createData = await Order.findOneAndUpdate(
      {
        date: `${date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()}`,
        email: request.body.email,
      },
      {
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
    const orders = await Order.find({
      email: request.body.email,
    })

    return response.json({ orders })
  }

  async menu(request, response) {
    const ordersOne = await Order.find({
      number: 1
    })
    const ordersTwo = await Order.find({
      number: 2
    })
    const ordersThree = await Order.find({
      number: 3
    })
    const ordersFour = await Order.find({
      number: 4
    })
    const counterOrders = []
    counterOrders.push(ordersOne.length, ordersTwo.length, ordersThree.length, ordersFour.length)

    response.json({ counterOrders })
  }
}

module.exports = new OrderController()
