'use strict'

/**
 * Module dependencies
 */
const NewsAPI = require('newsapi')
const news = new NewsAPI('811b23ddeeea4201a119835b0334d5c5')

/**
 * Return articles
 */
module.exports.getArticles = (req, res) => {
  news.v2.everything({
    q: 'bitcoin',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2017-12-01',
    to: '2017-12-12',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(response => {
    res.json(response)
  })
}
