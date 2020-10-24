const createError = require('http-errors');
const express = require('express');
const socket = require('socket.io');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const apiRouter = require('./routes/api');
const logger = require('morgan');
const session = require('express-session');
const db = require('./models');
const cors = require('corss');
const stripe = require('stripe')('sk_test_51HfAIJGuKajdMWRyeTCxNqg0wb4Otxk8owRIjtQNqFn3zzeYkFk4C8KdD5b8jQgqzzjTj7pNJmsBuhXyKrVU67AV00CwmOMQyT')
const uuid = require('uuid/v4')

let app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const sessionData = session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 600000000
  }
})

app.use(
  sessionData
)

app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/api/v1/', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
})

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.json(err);
// });



module.exports = app;

