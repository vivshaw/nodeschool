const picture = require('cat-picture');
const image = require('lightning-image-poly');

const src = picture.src;
const viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

picture.remove();