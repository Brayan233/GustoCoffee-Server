'use strict';

var mysql      = require('mysql');

exports.register = function (req,res){


    connection.query('SELECT * FROM `books` WHERE `author` = ?', ['David'], function (error, results, fields) {
        connection.query('SELECT * FROM `books` WHERE `author` = ?', ['David'], function (error, results, fields) {
            if (error) throw error;
            res.json({"message":"ok"})
          });
      });



};


exports.login = function(req,res){



    console.log('login call');



};


exports.getUsers= function(req,res){



    console.log('getUSers call');



};