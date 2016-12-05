var db = require('../db');
var ObjectId = require('mongodb').ObjectId;

exports.get = function (id, done) {
    var collection = db.get().collection('campings');

    collection.findOne({_id:ObjectId(id)},function(err, docs) {
        console.log(docs);
        done(err,docs);
    });

};

exports.all = function (done) {
    var collection = db.get().collection('campings');

    collection.find().toArray(function(err, docs) {
        console.log(docs);
        done(err,docs);
    });

};

exports.new = function (data, done) {
    var collection = db.get().collection('campings');

    collection.insertOne(data, function (err, result) {
        if (err)  console.log(err)
        else console.log('saved to database');

        done(err,result);
    })

};

exports.edit = function (id, data, done) {
    var collection = db.get().collection('campings');
    console.log("On edit", id);
    collection.updateOne({_id:ObjectId(id)}, {$set:data}, function (err, result) {
        if (err)  console.log(err)
        else console.log('saved to database');

        done(err,result);
    })

};

exports.delete = function (id, done) {
    var collection = db.get().collection('campings');
    console.log("On remove", id);
    collection.removeOne({_id:ObjectId(id)}, function (result) {
        console.log('removed from database',result);

        done(result);
    })

};
