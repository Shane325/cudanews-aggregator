'use strict'

/**
 * Module dependencies
 */
let _ = require('lodash')
let firebaseApiService = require('./firebase-api.service')
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
    let articles = response.articles
    _.forEach(articles, (article) => {
      firebaseApiService.saveArticle(article)
    })
  })
}
