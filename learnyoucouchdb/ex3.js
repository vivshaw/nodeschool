// Security first! No hardcoded keys here ヽ(⌐■_■)ノ♪♬
const { COUCHDB_USER, COUCHDB_PASS } = process.env;
const nano = require('nano')(`http://${COUCHDB_USER}:${COUCHDB_PASS}@localhost:5984`);
const couchdb = nano.db.use('things-learn-couchdb');

// We want to build this view.
const metalView = {
    "views": {
        "thingsMadeOfMetal": {
            "map": function(doc) {
                if (doc.material === 'metal') {
                    emit(doc._id, doc);
                }
            }
        }
    }
}

// Let's try to build our view, using a normal insert call:
couchdb.insert(metalView, '_design/thingsMadeOfMetal', (err) => {
    if (err) throw err;
    
    // Neat, the view was built! Let's test it out:
    couchdb.view('thingsMadeOfMetal', 'thingsMadeOfMetal', (err, body) => {
        if (err) throw err;

        body.rows.forEach(element => {
            console.log(element.value);
        });
    })
})
