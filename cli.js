#!/usr/bin/env node

var colors = require('colors');
var motivate = require('./motivate');
var arg = process.argv[2];

var quote = motivate();
if (arg === 'format') {
  console.log(['',
    '    ' + colors.yellow(quote.body),
    '        -- ' + colors.gray(quote.source),
    ''
  ].join('\n'));
} else {
  console.log(quote.body);
  console.log('-- ' + quote.source);
}
