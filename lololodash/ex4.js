const _ = require('lodash');

const worker = (hash) => {
    let grouped = {
        hot: [],
        warm: []
    };

    const warmDay = temp => temp > 19

    _.each(hash, (temps, city) => {
       if (_.every(temps, warmDay)) {
           grouped.hot.push(city)
       } else if (_.some(temps, warmDay)) {
        grouped.warm.push(city)
       }
    })

    return grouped;
};

module.exports = worker;