
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./demo-package.cjs.production.min.js')
} else {
  module.exports = require('./demo-package.cjs.development.js')
}
