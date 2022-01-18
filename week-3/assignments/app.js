const express = require('express')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

// static folder
app.use(express.static('public'))

// View Engine
app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars.engine())

// Body Parser Middleware(make POST body works)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', message: 'Welcome to my server :)' })
})

app.get('/getData', (req, res) => {
  const { number } = req.query

  // check query string parameter
  if (!number) {
    return res
      .status(400)
      .render('error', { title: 'Error(400)', message: 'Lack of Parameter' })
  }

  // check the number is integer && >0
  if (
    !Number.isInteger(Number(number)) ||
    !Number(number) ||
    Number(number) <= 0
  ) {
    return res.status(400).render('error', {
      title: 'Error(400)',
      message: 'The number has to be an integer(>0)',
    })
  }

  let sum = (Number(number) * (Number(number) + 1)) / 2
  // res.json({ sum })
  res.render('result', { title: 'Result', sum })
})

app.get('/myName', (req, res) => {
  const { username } = req.cookies

  if (!username) {
    return res.redirect('/trackName')
  }

  res.render('showName', { title: 'Username', username })
})

app.get('/trackName', (req, res) => {
  const { username } = req.cookies

  if (username) {
    return res.redirect('/myName')
  }

  res.render('trackName')
})

app.post('/getData', (req, res) => {
  const { number } = req.body
  res.redirect('/getData?number=' + number)
})

app.post('/trackName', (req, res) => {
  const { username } = req.body
  res.cookie('username', username)
  return res.redirect('/myName')
})

// 404 page
app.use((req, res) => {
  res
    .status(404)
    .render('error', { title: 'Error(404)', message: 'Page Not Found' })
})

app.listen(3000)
