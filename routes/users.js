const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([
    {id:1, userName:'somebody'},
    {id:2, userName:'somebody_else'}
  ])
})
router.get('/', function (req, res, next) {
  res.send('GET request to the users')
  console.log('Got a GET request', 1)
})
router.post('/', function (req, res) {
  console.log('Got a POST request', 2)
})

router.put('/user', function (req, res) {
  console.log('Got a PUT request at /user', 3)
})

module.exports = router
