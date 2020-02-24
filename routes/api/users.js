const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    } 

    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          return res.status(400).json({email: "A user has already registered with this address"})
        } else { 
            // creation of new user happens here
            const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobile: req.body.mobile,
            schoolId: req.body.schoolId,
            email: req.body.email,
            password: req.body.password,
            admin: false
          })


            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => {
                        const payload = { id: user.id, handle: user.email };
                        //key will expire in an hour
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                              success: true,
                              token: "Bearer " + token
                            });
                          });
                        })
                    .catch(err => console.log(err));
                })
            })
        }
    })
})

// Login route

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
    .then(user => {
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (isMatch) {
            const payload = {id: user.id, name: user.email};

            jwt.sign(
                payload,
                keys.secretOrKey,
                // the key will expire in one hour
                {expiresIn: 3600},
                (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token
                });
              });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        })
    })
})

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

module.exports = router;