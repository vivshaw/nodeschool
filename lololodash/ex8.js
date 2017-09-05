const _ = require('lodash');

const worker = (workers) => {
    let overview = {};

    overview.average = _.meanBy(workers, 'income');
    
    [overview.underperform, overview.overperform] = _.chain(workers)
                                                        .sortBy('income')
                                                        .partition(({ income }) => income <= overview.average)
                                                        .value();

    return overview;
};

module.exports = worker;