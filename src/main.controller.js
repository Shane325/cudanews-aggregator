'use strict'

/**
 * Module dependencies
 */
const NewsAPI = require('newsapi')
let newsConfig = require('./config/news')
const news = new NewsAPI(newsConfig.NEWS_API_KEY)

/**
 * Return articles
 */
module.exports.getArticles = (req, res) => {
  news.v2.everything({
    q: newsConfig.query,
    from: '2017-12-01',
    to: '2017-12-12',
    language: newsConfig.language,
    page: 1
  }).then(response => {
    res.json(response)
  })
}
