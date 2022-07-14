//server.js
var express = require('express');
var app = express();
app.get('/api', function(req, res) {
    
    res.send(
        [
            {'task':'lighters'},
            {'task':'floors'},
            {'task':'turn off ice machine'},
            {'task':'challah'},
            {'task':'Set temperature heat/ac'},
            {'task':'set the table'},

        ]
    );
})
var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080/api")
})