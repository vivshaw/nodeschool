const _ = require('lodash');

const worker = (arr) => _.orderBy(arr, 'quantity', 'desc');

module.exports = worker;