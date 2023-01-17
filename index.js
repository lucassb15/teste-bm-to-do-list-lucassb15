const mongoose = require('mongoose');
mongoose.connect
mongoose.set("strictQuery", true);
mongoose.connect('mongodb+srv://admin:6JMOUlAasIRpLE23@bmtest.savpqao.mongodb.net/todolist');

const express = require('express');
const app = express();

const userRoute = require('./routes/userRoute');

app.use('/', userRoute);

app.listen(3000, function (){
    console.log('Servidor iniciado em: http://localhost:3000');
});
