var express = require('express');
var Page = require('../lib/models/page');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/pages', (req, res) => {
    console.log('Got to the pages route');

    Page.find({}).limit(100)
        .then(function(pages) {
            res.json(pages);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
});

module.exports = router;