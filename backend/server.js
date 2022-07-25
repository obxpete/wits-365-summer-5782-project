const {Connection, Request} = require("tedious");
const executeSQL = (sql, callback) => {
  let connection = new Connection({
    "authentication": {
      "options": {
        "userName": "admin",
        "password": "wits365summer5782"
      },
      "type": "default"
    },
    "server": "witssummer.c5ni8ntdysh1.us-east-1.rds.amazonaws.com",
    "options": {
      "validateBulkLoadParameters": false,
      "rowCollectionOnRequestCompletion": true,
      "database": "witsExamples",
      "encrypt": true
    }
  });
  connection.connect((err) => {
    if (err)
      return callback(err, null);
    const request = new Request(sql, (err, rowCount, rows) => {
      connection.close();
      if (err)
        return callback(err, null);
      callback(null, {rowCount, rows});
    });
    connection.execSql(request);
  });
};
executeSQL("select taskID, task from tasks", (err, data) => {
  if (err)
    console.error(err);
  console.log(data.rowCount);
});
//or
