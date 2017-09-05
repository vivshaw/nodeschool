const _ = require('lodash');

const worker = (arr) => {
    return _.orderBy(arr, 'quantity', 'desc')
};

module.exports = worker;