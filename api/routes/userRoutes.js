'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // todoList Routes
  app.route('/register')
	.post(user.register);

  app.route('/login')
	.post(user.login);

  app.route('/users')
	.post(user.getUsers);  

};