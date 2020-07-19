var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var espRouter = require('./routes/esp');
var errRouter = require('./routes/err');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/esp',express.static('public'));
app.use('*',express.static('public'));

app.use('/', indexRouter);
app.use('/esp', espRouter);
app.use('*', errRouter);

app.listen(3000);

module.exports = app;
