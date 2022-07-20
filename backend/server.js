//server.js
var express = require('express');
var app = express();
const sqlite3 = require('sqlite3').verbose()
const Connection = require('tedious').Connection
const Request = require('tedious').Request

const config = {
  server: 'witssummer.c5ni8ntdysh1.us-east-1.rds.amazonaws.com',
  authentication: {
    type: 'default',
    options: {
      userName: 'admin', // update me
      password: 'wits365summer5782' // update me
    }
  }
}

const connection = new Connection(config)

connection.on('connect', (err) => {
  if (err) {
    console.log(err)
  } else {
    executeStatement()
  }
})

function executeStatement () {
  request = new Request("select * from tasks'", (err, rowCount) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`${rowCount} rows`)
    }
    connection.close()
  })

  request.on('row', (columns) => {
    columns.forEach((column) => {
      if (column.value === null) {
        console.log('NULL')
      } else {
        console.log(column.value)
      }
    })
  })

  connection.execSql(request)
}
var server = app.listen(8080, function() {
    connection.all("SELECT task from tasks", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.first_name, row.last_name);
        })
	});	
db.close();

    console.log("Backend Application listening at http://localhost:8080/api")
})