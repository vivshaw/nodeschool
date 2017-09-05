const _ = require('lodash');

const worker = (data) => {
    return _.template('Hello <%= name %> (logins: <%= login.length %>)')(data)
};

module.exports = worker;