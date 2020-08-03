const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Op = db.Sequelize.Op
// const secret = "mysecretshhh";
const checkAuth = require('../auth/checkAuthentication');

router.get('/user', checkAuth, function (req, res, next) {
    db.User.findByPk(req.session.user.id)
        .then(data => {
            res.json(data)
        })
})

router.get('/directory', checkAuth, function(req, res, next) {
    db.Directory.findAll(
    ).then((data) => {
      res.json(data);
    }); 
  });
  
router.get('/sermons', checkAuth, function(req, res, next) {
    db.Sermon.findAll(
    ).then((data) => {
      res.json(data);
    }); 
  });
// router.post('/', function (req, res) {
//     console.log(req.body)
//     const { password } = req.body
   
//     if (!password) { res.status(400).json({ error: 'password field is required' }); }
//     bcrypt.hash(password, 10, (err, hash) => {
//         db.User.create({
//             password: hash,
//         })
//             .then(user => {
//                 req.session.user = user;
//                 res.status(201).json(user);
//             })
//     });
// });
router.post('/login', (req, res) => {
    const password = req.body.password;
    db.User.findOne({ where: { id: 1 } })
        .then((User) => {
            bcrypt.compare(password, User.password, (err, match) => {
                if (err) {
                    res.status(500)
                        .json({ error: 'Incorrect Password' })
                } else if (!match) {
                    res.status(401)
                        .json({
                            error: 'Incorrect email or password'
                        })
                } else {
                    req.session.user = User;
                    res.json(User)
                }
            })
        })
        .catch(() => {
            res.status(401)
                .json({ error: 'Username not found' })
        })
})

router.get('/sermons', checkAuth, (req, res) => {
    db.Sermon.findAll()
    .then((data) => {
        res.json(data);
    })
})


module.exports = router;