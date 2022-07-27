var config = require('./dbConfig');
const sql = require('mssql');

async function getTasks() 
{
    try {
        let pool = await sql.connect(config);
        let tasks = await pool.request().query(" select taskID, task from tasks");
        return tasks
    } 
    catch (error) {
        console.log(error)
    }
}


module.exports =  {
    getTasks : getTasks
}

// const {Connection, Request} = require("tedious");



// let connection = new Connection({
//     "authentication": {
//       "options": {
//         "userName": "admin",
//         "password": "wits365summer5782"
//       },
//       "type": "default"
//     },
//     "server": "witssummer.c5ni8ntdysh1.us-east-1.rds.amazonaws.com",
//     "options": {
//       "validateBulkLoadParameters": false,
//       "rowCollectionOnRequestCompletion": true,
//       "database": "witsExamples",
//       "encrypt": true
//     }
//   });


// async function getTasks(params) {
//     // let pool;
//     // let tasks;
//     let tasks;
//     const request = new Request("select taskID, task from tasks", async (err, rowCount, data) => {
//         connection.close();
//         console.log(data)
//         tasks =  data
//         return data;
//     });    
              
//     return  connection.connect((err) => {
//         console.log('ran sql connection')
//         return connection.execSql(request);
//     });

// }

// module.exports = {
//     getTasks : getTasks
// }