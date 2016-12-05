var db = require('../db');

exports.all = function (done) {
    var collection = db.get().collection('campings');

    collection.find().toArray(function(err, docs) {
        done(err,docs);
    });

};

exports.new = function (data, done) {
    db.collection('quotes').save(data, function (err, result) {
        if (err)  console.log(err)
        else console.log('saved to database');

        done(err,result);
    })

};
