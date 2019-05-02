var express = require('express');
var router = express.Router();
const connection = require('../public/javascripts/database')
const os = require('os');

/* GET home page. */
router.get('/', async (req, res, next) => {
  await connection.query('SELECT * from Product', (err, rows, fields) => {

    // if (err) throw err
    res.json(rows)

    /* const used = process.memoryUsage();
    for (let key in used) {
      console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    } */
  })
  // connection.end()
  // console.log(query);
  // console.log(hej);
});

module.exports = router;
