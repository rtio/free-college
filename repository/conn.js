var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'admin',
  password        : 'admin',
  database        : 'Universidade'
});

exports.connection = pool;
