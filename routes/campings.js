var express = require('express');
var router = express.Router();
var Campings = require('../controllers/campings');

/* GET campings listing. */
router.get('/', function(req, res, next) {
    Campings.all(function(err, docs) {
        res.render('campings', {campings: docs})
    });
});

/* POST camping. */
router.post('/', function(req, res, next) {
    Campings.new(req.body,function(err, docs) {
        res.redirect('/campings');
    });
});

/* GET camping details. */
router.get('/:id', function(req, res, next) {
    Campings.get(req.params.id,function(err, doc) {
        res.render('camping', {camping: doc})
    });
});

/* PUT camping details. */
router.post('/:id', function(req, res, next) {
    console.log("About to put",req.body);
    Campings.edit(req.params.id, req.body,function(err, docs) {
        res.redirect('/campings');
    });
});

/* DELETE camping. */
router.get('/delete/:id', function(req, res, next) {
    Campings.delete(req.params.id,function(result) {
        res.redirect('/campings');
    });
});

module.exports = router;
