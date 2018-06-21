'use strict'

/**
 * Module dependencies
 */
let moment = require('moment')

/**
 * Generate scan object
 */
module.exports.generateScan = (response, q, from, currentDate, language, sources) => {
  let scan = {
    totalResults: response.totalResults,
    status: response.status,
    query: {
      q: q,
      from: from,
      to: currentDate,
      language: language,
      sources: sources
    },
    date: currentDate
  }
  return scan
}
