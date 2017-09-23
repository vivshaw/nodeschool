const picture = require('cat-picture');
const image = require('lightning-image-poly');
const remote = require('electron').remote;
const fs = require('fs');

/* Remove the old picture */
picture.remove();

/* Set up our visualization */
const src = picture.src;
const viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

/* Save screenshot to PDF */
const savePdf = () => {
    remote.getCurrentWebContents().printToPDF({
        portrait: true
    }, (err, data) => {
        fs.writeFile('annotation.pdf', data, err => {
            if (err) alert('error generating pdf! ' + err.message);
            else alert('pdf saved!');
      })
    })
}

/* Listen for the P key & save a screenshot on keydown */
window.addEventListener('keydown', event => {
    if (event.keyCode == 80) savePdf();
})