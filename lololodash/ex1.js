const _ = require('lodash');

const worker = (arr) => {
    return _.filter(arr, {active: true})
};

module.exports = worker;