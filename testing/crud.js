const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '192.168.1.173',
    user: 'webapp',
    password: 'webapp',
    database: 'olmsted_SAHD_MDB',
    connectionLimit: 10,
    multipleStatements: true,
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if(error) throw error;
    
    console.log('The solution is: ', results[0].solution);
});

connection.end();