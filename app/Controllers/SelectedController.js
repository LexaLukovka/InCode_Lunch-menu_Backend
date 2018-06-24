const Menu = require('../Models/Menu')

class SelectedController {
  async changeMenu(request, response) {
    // console.log(request.body)
    // // const values = JSON.stringify(request.body.value)
    // // console.log(value)
    // const menu = await Menu.findOneAndUpdate(
    const menu = await Menu.find(
      {
        id: 0,
      },
      (err, docs) => {
        const a = docs.map(value => { return value.menu })
        console.log(a)
      }
    )

    // Menu.find({ id: 0 }, function (err, docs) {
    //   console.log(docs)
    // Map the docs into an array of just the _ids
    // var ids = docs.map(function (doc) { return doc._id })

    // Get the companies whose founders are in that set.
    // Company.find({ founder: { $in: ids } }, function (err, docs) {
    // docs contains your answer
    // })
    // })

    // console.log(menu)

    // return response.json({ menu })

    const menus = await Menu.find({})
    console.log(menus)

    const modelToUpdate = menus[request.body.IndexMenu]

    const values = modelToUpdate.menu.toObject()

    values[request.body.indexDish] = request.body.value

    debugger
    debugger

  }
}

module.exports = new SelectedController()
