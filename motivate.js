var R = require('random-js');
var moment = require('moment');
var quotes = require('./quotes.json');

module.exports = function() {
  var seed = parseInt(moment().format('YYYYMMDD'));
  var engine = R.engines.mt19937().seed(seed);
  var index = R.integer(0, quotes.length - 1)(engine);
  return quotes[index];
};
