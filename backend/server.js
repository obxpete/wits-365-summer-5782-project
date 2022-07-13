//server.js
var express = require('express');
var app = express();
app.get('/api', function(req, res) {
    res.send({'message':'Hello World'});
})
var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})