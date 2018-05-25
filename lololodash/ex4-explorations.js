const _ = require('lodash');

const worker = (hash) => {
    let grouped = {
        hot: [],
        warm: []
    };

    const warmerThan = compareTo => temp => temp > compareTo;

    const makeWarm = data => grouped.warm.push(data);
    const makeHot = data => grouped.hot.push(data);

    const hotCond = x => _.every(x, warmerThan(19));
    const warmCond = x => _.some(x, warmerThan(19));

    const categorize = (data, predConsPairs) => _.each(data, (k, v) => {
        const obj = {key: k, value: v};

        const propped = (prop, f) => x => f(x[prop]);

        const applyIf = (data, propNames, predConsPairs) => _.cond(
            predConsPairs.map(pair => [propped(propNames[0], pair[0]), propped(propNames[1], pair[1])])
        )(data)

        applyIf(obj, ['value', 'key'], [
            [hotCond, makeHot],
            [warmCond, makeWarm]
        ])
    });

    categorize(hash, [
        [hotCond, makeHot],
        [warmCond, makeWarm]
    ]);

    return grouped;
};

module.exports = worker;