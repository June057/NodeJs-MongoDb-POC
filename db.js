const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
var db= null;
// Database Name
const dbName = 'myproject';

   MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) {
      if (err) return done(err);
      db = client.db(dbName);
        console.log("Connected successfully to server");
    });
    module.exports.get=function(){
        return db;
    };
