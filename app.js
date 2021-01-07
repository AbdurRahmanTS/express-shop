const express = require('express');
const logger = require('morgan');
require('dotenv').config();
const db = require('./db/db');

const authController = require('./controllers/auth.controller');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const shopsRouter = require('./routes/shops');
const authRouter = require('./routes/auth');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shops', authController.isAuthenticated, shopsRouter);
app.use('/auth', authRouter);

module.exports = app;
