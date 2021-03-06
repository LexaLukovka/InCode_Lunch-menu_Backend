const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const passport = require('passport')

const authRoutes = require('./routes/auth')
const menuRoutes = require('./routes/menu')
const dishesRoutes = require('./routes/dishes')
const orderRoutes = require('./routes/order')
const usersRoutes = require('./routes/users')
const balanceRoutes = require('./routes/balance')
const selectControlRoutes = require('./routes/selectControl')
const selectedRoutes = require('./routes/selected')
const verifyEmailRoutes = require('./routes/verifyEmail')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
app.use(passport.initialize())

app.use('/', authRoutes)
app.use('/', menuRoutes)
app.use('/', dishesRoutes)
app.use('/', usersRoutes)
app.use('/', orderRoutes)
app.use('/', balanceRoutes)
app.use('/', selectControlRoutes)
app.use('/', selectedRoutes)
app.use('/', verifyEmailRoutes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
