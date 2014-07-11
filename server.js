var express = require('express')
var app = express()
var morgan = require('morgan')

app.use(morgan('dev'))
app.use(function (req, res, next) {
  setTimeout(next, 1000)
})
app.use(express.static(__dirname))

var server = app.listen(3000, function() {
  console.log('server up on port', server.address().port)
})
