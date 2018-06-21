'use strict'

/**
 * Module dependencies
 */
let _ = require('lodash')
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
    author: article.author,
    title: article.title,
    description: article.description,
    url: article.url,
    img: article.urlToImage,
    date: article.publishedAt,
    source: article.source.name
  })
}

/**
 * Save scan
 */
module.exports.saveScan = (scan) => {
  let scansRef = ref.child('scans')
  scansRef.push(scan)
}

/**
 * Save latest scan
 */
module.exports.saveLatestScan = (scan) => {
  let latestScanRef = ref.child('latestScan')
  latestScanRef.set(scan)
}

/**
 * Get latest scan
 */
module.exports.getLatestScan = () => {
  let latestScansRef = ref.child('latestScan')
  return latestScansRef.once('value')
    .then((snapshot) => {
      let scan = snapshot.val()
      if (scan) {
        return scan.date
      } else {
        return null
      }
    })
}
