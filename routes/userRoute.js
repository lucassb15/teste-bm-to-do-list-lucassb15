const express = require('express');
const user_route = express();
const session = require('express-session');

user_route.set('view engine', 'ejs');
user_route.set('views', './views/users');



const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

const taskController = require('../controllers/taskController');

//  Routes

// ToDo CAD
user_route.get('/',taskController.loadToDoCad);
user_route.get('/todoCad',taskController.loadToDoCad);

user_route.post('/todoCad',taskController.insertTask)

// ToDo Task
user_route.get('/todoTask',taskController.loadToDoTask);

module.exports = user_route;