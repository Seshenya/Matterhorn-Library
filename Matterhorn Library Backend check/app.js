var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

// on connection
mongoose.connection.on('connected',()=> {
    console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error in database connection');
    }
});

const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.get(('/'),(req,res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('server started at port:'+port)
})

