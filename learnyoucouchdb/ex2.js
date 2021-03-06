// Security first! No hardcoded keys here ヽ(⌐■_■)ノ♪♬
const { COUCHDB_USER, COUCHDB_PASS } = process.env;
const nano = require('nano')(`http://${COUCHDB_USER}:${COUCHDB_PASS}@localhost:5984`);

// We want to make a db titled 'couchdbschool' and insert this data.
const dbName = 'couchdbschool';
const data = {
    "_id": "robert",
    "type": "human"
};

// Let's create our db:
nano.db.create(dbName, (err, body) => {
    if (err) throw err;

    console.log('created db ${dbName}!');

    // Time to connect and insert!
    const couchdbschool = nano.db.use(dbName);
    couchdbschool.insert(data, (err, body) => {
        if (err) throw err;

        // Nailed it!
        console.log('Success: ', body);
    });
});

