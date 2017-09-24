const mongo = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/learnyoumongo"
const minAge = parseInt(process.argv[2])

mongo.connect(url, (err, db) => {
  if (err) throw err;
  
  db.collection("parrots").find({
    "age": {
      $gt: minAge
    }}, {
      name: 1,
      age: 1,
      _id: 0
  }).toArray( (err, docs) => {
      if (err) throw err;

      console.log(docs);
      db.close();
    })
})