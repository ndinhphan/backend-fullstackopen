/* eslint-disable no-undef */

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const blogsRouter = require('./controller/blogs.js');
const mongoUrl = config.MONGODB_URI;
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
logger.info('connecting to', config.MONGODB_URI);


mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

app.use(cors());
app.use(express.json());
var morgan = require('morgan');
app.use(express.static('build'));
app.use(morgan(function (tokens, req, res) {
  // console.log(req.body)
  return [
    req.method,
    req.url,
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ');
}));

app.use('/api/blogs',blogsRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);


module.exports = app;