const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateRegisterInput(data) {
  let errors = {};

    data.firstName = validText(data.firstName) ? data.firstName : '';
    data.lastName = validText(data.lastName) ? data.lastName : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';
    data.mobile = validText(data.mobile) ? data.mobile : '';
  

      if (!Validator.isLength(data.firstName, { min: 3, max: 20})) {
        errors.firstName = 'Please enter your real name';
      };

      if (Validator.isEmpty(data.firstName)) {
        errors.firstName = 'First name field is require';
      }

      if (!Validator.isLength(data.lastName, { min: 3, max: 20 })) {
        errors.lastName = 'Please enter your real name';
      };

      if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'Last name is require';
      };

      if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
      }

      if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
      }

      if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
      }
    
      if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
      }

      if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required';
      }
    
      if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
      }

      if (Validator.isEmpty(data.mobile)) {
        errors.mobile = 'Mobile number field is required';
      }

      if (!Validator.isMobilePhone(data.mobile)) {
        errors.mobile = 'Mobile is invalid';
      }

      if (!Validator.isLength(data.mobile, { min: 10, max: 10 })) {
        errors.mobile = 'Mobile is invalid';
      }

      return {
        errors,
        isValid: Object.keys(errors).length === 0
      };
    };

    


