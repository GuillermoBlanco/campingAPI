var express = require('express');
var router = express.Router();
var Campings = require('../controllers/campings');

/* GET campings listing. */
router.get('/', function(req, res, next) {
    Campings.all(function(err, docs) {
        res.render('campings', {campings: docs})
    });
    //res.send('respond with a resource');
});

/* POST camping. */
router.post('/', function(req, res, next) {
    Campings.new(req.body,function(err, docs) {
        //res.render('camping', {campings: docs});
        res.redirect('/');
    });
    //res.send('respond with a resource');
});

/* GET camping details. */
router.get('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

/* PUT camping details. */
router.put('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

/* DELETE camping. */
router.delete('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
