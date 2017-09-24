const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/' + 'learnyoumongo';
const age = process.argv[2];

mongo.connect(url, (err, db) => {
  if (err) throw err;

  db.collection('parrots').count({
    'age': {$gt: +age}
  }, (err, count) => {
    if (err) throw err;

    console.log(count);

    db.close();
  });
});