const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Op = db.Sequelize.Op
// const secret = "mysecretshhh";
const checkAuth = require('../auth/checkAuthentication');


module.exports = router;