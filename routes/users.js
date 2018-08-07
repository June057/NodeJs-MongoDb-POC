var express = require('express');
var router = express.Router();
const db = require("../db");
//const collection =db.get().collection('users');
/* GET users listing. */
router.post('/', function(req, res, next) {
    db.get().collection('users').insertMany([
        {userName : req.body.name,branch:req.body.branch}
    ], function(err, result) {
        console.log("Inserted 3 documents into the collection");
        res.send('data Inserted successfully')
    });
});

router.get('/:name', function(req, res, next) {
    console.log(req.params);
    db.get().collection('users').find({userName:req.params.name}).toArray(
      function(err, result) {
        console.log(result);
        console.log("Found Records");
        res.send(result)
    });
});
router.delete('/', function(req, res, next) {
    console.log(req.query)
    db.get().collection('users').deleteOne({
        userName:req.query.name

}, function(err, result) {
        console.log("Deleted record");
        res.send(result)
    });
});

router.put('/', function(req, res, next) {
    db.get().collection('users').updateOne({
        branch:req.query.branch

    },{$set:{userName:req.body.name}}, function(err, result) {
        console.log("updated record");
        res.send(result)
    });
});

module.exports = router;
