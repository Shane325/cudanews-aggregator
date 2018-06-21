'use strict'

/**
 * Module dependencies
 */
let admin = require('firebase-admin')
let serviceAccount = require('./../cudannews-firebase-adminsdk-dzsjj-c5aae88ade.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://cudannews.firebaseio.com'
})

let db = admin.database()
let ref = db.ref('cudanews')

/**
 * Save an article in firebase
 */
module.exports.saveArticle = (article) => {
  let articlesRef = ref.child('articles')
  articlesRef.push({
    title: article.title,
    description: article.description,
    url: article.url,
    img: article.urlToImage,
    date: article.publishedAt,
    source: article.source.name
  })
}
