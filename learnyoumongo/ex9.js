const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/' + 'learnyoumongo';
const size = process.argv[2]

mongo.connect(url, (err, db) => {
  if (err) throw err;

  db.collection('prices').aggregate([
      {$match: {size: size}},
      {$group: {
        _id: 'avgPrice',
        avgPrice: {$avg: '$price'}
      }}
    ]).toArray( (err, results) => {
      if (err) throw err;

      console.log(results[0].avgPrice.toFixed(2));

      db.close();
  });
});