/// Do not change the datasource as the tables will be truncated /////
const testDatasourceConfig = require('./server/datasources.test.json').default;  
const mysql = require('mysql');

const connection = mysql.createConnection({
  'host': testDatasourceConfig.host,
  'user': testDatasourceConfig.user,
  'password': testDatasourceConfig.password,
  'database': 'test',
  'multipleStatements': true
});

connection.connect();

connection.query('TRUNCATE `client`;' +
  'TRUNCATE `group`;' +
  'TRUNCATE `matter`;' +
  'TRUNCATE `timesheet`;' +
  'TRUNCATE `matter_associate`;' +
  'TRUNCATE `matter_template_task`;' +
  'TRUNCATE `matter_template`;',
  function(error, results, fields) {
    if (error) {
      throw error;
    }
    console.log("Truncated Test DB");
    connection.end();
    process.exit();
  });
