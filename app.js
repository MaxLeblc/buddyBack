require('./models/connection')

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var libraryRouter = require ('./routes/library')
var messageRouter = require('./routes/message');
var matchRouter = require ('./routes/match')

require('./models/connection')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/library', libraryRouter);
app.use('/message', messageRouter);
app.use('/match', matchRouter);

app.use(express.static(path.join(__dirname, 'reactapp/build')));

module.exports = app;
