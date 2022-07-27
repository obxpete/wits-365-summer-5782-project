const {Connection, Request} = require("tedious");


const executeSQL = async (sql, callback) => {
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
        const request = new Request(sql, async (err, rowCount, rows) => {
        connection.close();
        return await callback(null, {rowCount, rows});
        });
        connection.execSql(request);
    });
  };



// var config = require('./dbConfig');
// const sql = require ('mssql')

async function getTasks(params) {
    // let pool;
    // let tasks;
    let tasks;
    try {
        tasks =  await executeSQL("select taskID, task from tasks", (err, data) => {
            console.log('data!!');
            console.log(data.rows[0]);
            tasks = data
          });
          return tasks.rows[0];
          
    } catch (error) {
        console.log('error in function');
    }
}

module.exports = {
    getTasks : getTasks
}