const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/" + process.argv[2];

mongo.connect(url, (err, db) => {
  if (err) throw err;

  db.collection('users').update({
      username: 'tinatime'
  }, {
      $set: {
          age: 40
      }
  }, (err, data) => {
      if (err) throw err;

      db.close();
  });
});