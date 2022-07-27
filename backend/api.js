const dbOperations = require('./dbOperations');
var Db = require('./dbOperations')
var Task = require('./task');

var express = require ('express')
var bodyParser = require('body-parser');
var cors = require('cors');
const  app  = express();
var router = express.Router();

app.unsubscribe(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api', router);

router.use((request, response, next) =>{
    console.log('middleware')
    next();
});

router.route('/tasks').get((request, response) =>{
    let result;
    dbOperations.getTasks().then(result => {
        console.log('ran request')
        console.log(result);
        response.json(result)
    }) 
})

var port = process.env.PORT ||  8090;
console.log('process.env.PORT')
console.log(port)
app.listen(port);
console.log('Task API is running at + ' + port)

