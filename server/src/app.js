const express = require('express');
const morgan =require('morgan');
const cors = require('cors');

const app= express();

app.set('port',process.env.PORT |3000);

//middlewear
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());



app.use('/api/employees',require('./routes/employees.routes'));//agregagamos el prefijo a las rutas  para luego no escribirlar en la api

module.exports=app;