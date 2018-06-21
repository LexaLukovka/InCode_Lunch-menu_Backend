const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/incode')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('were connected!')
})

module.exports = db
