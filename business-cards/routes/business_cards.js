var express = require('express');
var router = express.Router();

var BusinessCard = require('../models/BusinessCard.js');

/* GET /BusinessCards listing. */
router.get('/', function (req, res, next) {
    BusinessCard.find(function (err, businessCards) {
        if (err) return next(err);
        res.json(businessCards);
    });
});

/* POST /BusinessCards */
router.post('/', function (req, res, next) {
    BusinessCard.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /BusinessCards/id */
router.get('/:id', function (req, res, next) {
    BusinessCard.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /BusinessCards/:id */
router.put('/:id', function (req, res, next) {
    BusinessCard.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /BusinessCards/:id */
router.delete('/:id', function (req, res, next) {
    BusinessCard.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;