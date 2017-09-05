const _ = require('lodash');

const worker = (words) => {
    return _.chain(words)
        .map(word => word.concat('chained').toUpperCase())
        .sort()
        .value()
};

module.exports = worker;