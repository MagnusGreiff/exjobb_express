var express = require('express');
var router = express.Router();
const connection = require('../public/javascripts/database')
const os = require('os');

/* GET home page. */
router.get('/', (req, res, next) => {
    connection.query('SELECT * from Product', (err, rows, fields) => {


        console.log(os.cpus());
        console.log(os.totalmem());
        console.log(os.freemem())

        // if (err) throw err
        res.json(rows)

        /* const used = process.memoryUsage();
        for (let key in used) {
            console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
        } */
    })
});

module.exports = router;
