var express = require('express');
var router = express.Router();
const connection = require('../public/javascripts/database')
const os = require('os');

/* GET home page. */
router.get('/', (req, res, next) => {
    connection.query('SELECT * from product', (err, rows, fields) => {
        res.json(rows)
    })
});

module.exports = router;
