const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('GET request to the user')
  console.log('Got a GET request', 11)
})

module.exports = router