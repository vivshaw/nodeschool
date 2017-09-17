// Security first! No hardcoded keys here ヽ(⌐■_■)ノ♪♬
const { COUCHDB_USER, COUCHDB_PASS } = process.env;
const nano = require('nano')(`http://${COUCHDB_USER}:${COUCHDB_PASS}@localhost:5984`);
const couchdb = nano.db.use('programming-languages-learn-couchdb');

// We want to build this view, with both a map and reduce stage.
// We'll use a CouchDB builtin for the reduce.
const languageView = {
    "views": {
        "languages": {
            "map": function(doc) {
                emit(doc._id, doc);
            },
            "reduce": "_count"
        }
    }
}

// Let's try to build our view, again using a normal insert call:
couchdb.insert(languageView, '_design/languages', (err) => {
    if (err) throw err;
    
    // Neat, another working view! Let's test it out:
    couchdb.view('languages', 'languages', (err, body) => {
        if (err) throw err;

        body.rows.forEach(element => {
            console.log(element.value);
        });
    })
})
