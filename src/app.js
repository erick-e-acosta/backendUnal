const express = require('express');

const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();
const userRoutes = require('./routes/user');


//configuracion express
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'root',
    port:8889,
    database:'new_schema'
},'single'));

// Routes
app.use('/', userRoutes);


app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000')
})
