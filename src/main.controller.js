'use strict'

/**
 * Module dependencies
 */
let _ = require('lodash')
let moment = require('moment')
let service = require('./main.service')
let firebaseApiService = require('./firebase-api.service')
const NewsAPI = require('newsapi')
let newsConfig = require('./config/news')
const news = new NewsAPI(newsConfig.NEWS_API_KEY)

/**
 * Return articles
 */
module.exports.getArticles = (req, res) => {
  let promise = firebaseApiService.getLatestScan()
  promise.then((from) => {
    let currentDate = moment().format()
    if (!from) {
      from = moment().subtract(7, 'd').format()
    }

    news.v2.everything({
      q: newsConfig.query,
      from: from,
      to: currentDate,
      language: newsConfig.language,
      sources: newsConfig.sources,
      pageSize: 100
    }).then(response => {
    // Save each article in firebase
      _.forEach(response.articles, (article) => {
        firebaseApiService.saveArticle(article)
      })

      // Log the scan in firebase
      let scan = service.generateScan(response, newsConfig.query, from, currentDate, newsConfig.language, newsConfig.sources)
      firebaseApiService.saveScan(scan)
      firebaseApiService.saveLatestScan(scan)
    }).finally(() => {
      console.log('articles saved')
    })
  })
}
