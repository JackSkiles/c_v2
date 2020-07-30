let createError = require('http-errors');
let express = require('express');
let socket = require('socket.io');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser')
let apiRouter = require('./routes/api');
let logger = require('morgan');
let session = require('express-session');
const db = require('./models');

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

