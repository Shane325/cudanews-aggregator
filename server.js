'use strict'

/**
 * Module dependencies
 */
let express = require('express')
let app = express()
let port = process.env.PORT || 8080
let controller = require('./src/main.controller')

setInterval(controller.getArticles, 1000 * 90) // 1.5 minute interval

app.listen(port)
console.log('App listening on port ', port)
