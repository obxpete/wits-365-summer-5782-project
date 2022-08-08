var config = require('./dbConfig');
const sql = require('mssql');


async function getTasks() 
{
    let pool = await sql.connect(config);
    let tasks = await pool.request().query(" select taskID, task from tasks");
    return tasks
}

async function addTask(task) 
{
    let pool = await sql.connect(config);
    let newTask = await pool.request().query(`INSERT INTO tasks (task) VALUES ('${task}'); `, taskDueDate);
    return newTask // sql just returns the task object it created
}

async function updateTask(taskObj) 
{
    let pool = await sql.connect(config);
    let result = await pool.request().query(`UPDATE tasks set task = '${taskObj['task']}', taskDueDate = '${new Date(taskObj['taskDueDate']).toDateString()}' where taskID = ${taskObj['taskID']}; `);
    return result // sql just returns the task object it created
}

async function deleteTask(taskID) 
{
    let pool = await sql.connect(config);
    let result = await pool.request().query(`delete tasks where taskID = '${taskID}'; `);
    return result // sql just returns the task object it created
}


module.exports =  {
    getTasks : getTasks,
    getTask: getTask,
    updateTask: updateTask,
    deleteTask: deleteTask,
    addTask: addTask,
    updateTask: updateTask,
    deleteTask: deleteTask
}



