const Menu = require('../Models/Menu')

class SelectedController {
  async changeMenu(request, response) {
    console.log(request.body)
    // const menu = await Menu.findOneAndUpdate(
    // const menu = await Menu.find(
    //   {
    //     id: request.body.IndexMenu,
    //     menu: {
    //       $elemMatch: {
    //         dishes_id: request.body.indexDish,
    //         description: request.body.value,
    //       }
    //     }
    //   },
    // )

    const menu = await Menu.update(
      {
        id: request.body.IndexMenu,
        'menu.dishes_id': request.body.indexDish
      },
      {
        '$set': {
          'menu.$.description': request.body.value,
        }
      }
    )

    console.log(menu)

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
//
// const menus = await Menu.find({})
// // console.log(menus)
//
// const modelToUpdate = menus[request.body.IndexMenu]
//
// const values = modelToUpdate.menu.toObject()
//
// values[request.body.indexDish] = request.body.value
//
// Menu.findOneAndUpdate(
//   {
//
//   }
// )

  }
}

module.exports = new SelectedController()
