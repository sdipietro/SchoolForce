const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.firstName = validText(data.firstName) ? data.firstName : '';
    data.lastName = validText(data.lastName) ? data.lastName : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';
    data.schoolId = typeof data.schoolId === 'integer' ? data.schoolId : ''?;

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
        errors.lastName = 'Lasr name is require';
      }


    