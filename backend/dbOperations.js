var config = require('./dbConfig');
const sql = require('mssql');

// GET ALL TASKS
async function getTasks() 
{
    let pool = await sql.connect(config);
    let tasks = await pool.request().query(" select taskID, task from tasks");
    return tasks
}

// GET A TASK
async function getTask(taskID) 
{
    let pool = await sql.connect(config);
    let task = await pool.request().query(`select taskID, task from tasks where taskID = ${taskID}`);
    return task
}

// ADD A TASK
async function addTask(task) 
{
    let pool = await sql.connect(config);
    let newTask = await pool.request().query(`INSERT INTO tasks (task) VALUES ('${task}'); `);
    return newTask // sql just returns the task object it created
}

// Insert UPDATE A TASK


module.exports =  {
    getTasks : getTasks,
    getTask: getTask,
    // replace this line with updateTask export
    addTask: addTask
}



