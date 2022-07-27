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



