'use strict'

/**
 * Module dependencies
 */
let express = require('express')
let router = express.Router()
let controller = require('./main.controller')
let service = require('./main.service')

// Define the application routes
router.get('/articles', controller.getArticles)

module.exports = router
