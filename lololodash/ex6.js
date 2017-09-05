const _ = require('lodash');

const worker = (data) => {
    return _.chain(data)
        .countBy('username')
        .map((value, key) => ({ username: key, comment_count: value }))
        .orderBy('comment_count', 'desc')
        .value()
};

module.exports = worker;