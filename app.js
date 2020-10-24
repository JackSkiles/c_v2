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
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HfAIJGuKajdMWRyeTCxNqg0wb4Otxk8owRIjtQNqFn3zzeYkFk4C8KdD5b8jQgqzzjTj7pNJmsBuhXyKrVU67AV00CwmOMQyT')
const { v4: uuidv4 } = require('uuid');


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

app.get("/", (req, res) => {
  res.send("add your stripe secret key!");
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await
    stripe.customers.create({
      email: token.email,
      source: token.id
    })

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: price,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: 'Than you for your donation!'
      },
      {
      idempotency_key
      }
    );
    console.log("Charge", { charge});
    status = "success";
  }catch (error) {
    console.error("Error", error);
    status = "failure";
  }
});

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

