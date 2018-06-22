const Order = require('../Models/Order')

class OrderController {
  async statistics(request, response) {
    const date = new Date()

    const createData = await new Order({
      id: 1,
      date: `${date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()}`,
      number: (request.body.index + 1),
      description: request.body.value.map(value => value.description).join(', '),
    })

    createData.save()

    return response.json({ createData: [createData] })
  }

}

module.exports = new OrderController()
