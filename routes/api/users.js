const express = require("express");
const router = express.Router();
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
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            mobile: req.body.mobile,
            schoolId: req.body.schoolId,
            email: req.body.email,
            password: req.body.password
          })
        }
    })
})

// Login routes 

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
            res.json({msg: 'Success'});
          } else {
            // And here:
            errors.password = 'Incorrect password'
            return res.status(400).json(errors);
          }
        })
    })
})


        




router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

module.exports = router;