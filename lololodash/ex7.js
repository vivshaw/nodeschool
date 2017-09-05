const _ = require('lodash');

const worker = (orders) => {
    return _.chain(orders)
        .reduce((total, { article, quantity }) => {
            total[article] ? total[article] += quantity : total[article] = quantity;
            return total;
        }, {})
        .map((quantity, article) => ({article: parseInt(article), total_orders: quantity}))
        .orderBy('total_orders', 'desc')
        .value()
};

module.exports = worker;