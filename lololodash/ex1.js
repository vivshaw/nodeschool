const _ = require('lodash');

const worker = (arr) => _.filter(arr, 'active');

module.exports = worker;