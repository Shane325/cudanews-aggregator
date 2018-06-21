'use strict'

/**
 * Module dependencies
 */
let express = require('express')
let app = express()
let port = process.env.port || 8080
let controller = require('./src/main.controller')

setInterval(controller.getArticles, 1000 * 300) // 5 minute interval

app.listen(port)
console.log('App listening on port ', port)
