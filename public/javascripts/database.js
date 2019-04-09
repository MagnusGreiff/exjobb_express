var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'magnus',
    database: 'exjobb'
});

connection.connect()

// connection.connect()

// connection.query('select * from Role', function (err, rows, fields) {
//     // if (err) throw err

//     console.log(rows);
    
// })

// connection.end()

module.exports = connection;