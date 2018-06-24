const SelectControl = require('../Models/SelectControl')

class SelectControlController {
  async selectControl(request, response) {
    console.log(request.body)
    const checked = await SelectControl.findOneAndUpdate(
      { checked: request.body.checked },
      { checked: request.body.checked },
      { upsert: true, }
    )
    return response.json({ checked })
  }
}

module.exports = new SelectControlController()
