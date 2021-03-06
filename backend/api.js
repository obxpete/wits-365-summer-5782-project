var express = require ('express');
var cors = require('cors');

var dbOperations = require('./dbOperations')
var bodyParser = require('body-parser');

var Task = require('./task'); // class definition

const  app  = express(); 
var router = express.Router();


app.unsubscribe(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api', router);
app.use(cors());

router.use((request, response, next) =>{
    // add authentication and other logic as needed here.
    console.log('middleware')
    next();
});

router.route('/tasks').get((request, response) =>{
    let result;
    dbOperations.getTasks().then(result => {
        
        response.json(result)
    }) 
})

router.route('/task/:taskID').get((request, response) =>{
    let result;
    dbOperations.getTask(request.params.taskID).then(result => {
        response.json(result)
    }) 
})

router.route('/add').post((request, response) =>{
    let newTask = {... request.body};
    dbOperations.addTask(newTask['task']).then(result => {
        response.status(201).json(result)
    }) 
})

var port = process.env.PORT ||  8090;
app.listen(port);
console.log('Task API is running at + ' + port)

