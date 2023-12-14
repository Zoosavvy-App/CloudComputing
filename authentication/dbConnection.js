var mysql = require('mysql');
var conn = mysql.createConnection({
  host: '34.101.80.184', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'auth123',      // Replace with your database password
  database: 'auth', // // Replace with your database Name
  socketpath: '/cloudsql/zoosavvy:asia-southeast2:auth'
}); 

conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
