const _ = require('lodash');

const worker = (hash) => {
    return _.each(hash, function({ population }, city) {
        if (population > 1) {
            hash[city].size = 'big'
        } else if (population > 0.5) {
            hash[city].size = 'med'
        } else {
            hash[city].size = 'small'
        }
    })
};

module.exports = worker;