'use strict'

/**
 * Module dependencies
 */
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let router = require('./src/main.routes')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

let port = process.env.port || 8080

app.use('/api', router)

app.listen(port)
console.log('App listening on port ', port)
