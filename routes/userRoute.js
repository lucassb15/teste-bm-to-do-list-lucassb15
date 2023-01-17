const express = require('express');
const user_route = express();
const session = require('express-session');

user_route.set('view engine', 'ejs');
user_route.set('views', './views/users');

const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

const userController = require('../controllers/userController');

//  Routes

user_route.get('todoCad',userController.loadToDoCad);

module.exports = user_route;