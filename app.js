let path = require('path');
let logger = require('morgan');
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

//
//  Set public paths
//
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));

//
//  Remove the information about what type of framework is the site running on
//
app.disable('x-powered-by');

//
// HTTP request logger middleware for node.js
//
app.use(logger('dev'));

//
//  Parse JSON requests
//
app.use(bodyParser.json());

//
//  Parse application/x-www-form-urlencoded
//
app.use(bodyParser.urlencoded({ extended: false }))

//
//  ROUTES
//
app.use('/users', require('./routes/users'));

//
//  catch 404 and forward to error handler
//
app.use(function(req, res, next) {

  let err = new Error('Not Found');
  err.status = 404;
  throw err;

});

//
//  Display any error that occurred during the request.
//
app.use(function(err, req, res, next) {

  //
  //  1.  Set the basic information about the error, that is going to be
  //    displayed to user and developers regardless.
  //
  let obj_message = {
    error: err.message,
    error_description: err.description
  }

  //
  //  2.  Check if the environment is development, and if it is we
  //    will display the stack-trace
  //
  if(process.env.NODE_ENV == 'development')
  {
    //
    //  -> Show the error in the console
    //
    console.error(err);
  }

  //
  //  3.  Display a default status error, or pass the one from
  //    the error message
  //
  res.status(err.status || 500);

  //
  //  ->  Show the error
  //
  res.json(obj_message);

});

module.exports = app;

