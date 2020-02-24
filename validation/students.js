const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateStudentInput(data) {
    let errors = {};

    data.first_name = validText(data.first_name) ? data.first_name : '';
    data.last_name = validText(data.last_name) ? data.last_name : '';
    data.gender = validText(data.gender) ? data.gender : '';
    data.date_of_birth = validText(data.date_of_birth) ? data.date_of_birth : '';
    data.start_date = validText(data.start_date) ? data.start_date : '';
    data.grade = validText(data.grade) ? data.grade : '';

    if (Validator.isEmpty(data.first_name)) {
        errors.first_name = 'First name is required';
    }

    if (!Validator.isLength(data.first_name, { min: 2 })) {
        errors.first_name = 'First name must be a minimun of 2 characters';
    }

    if (!Validator.isLength(data.first_name, { max: 15 })) {
        errors.first_name = 'First name must be a maximum of 15 characters';
    }

    if (Validator.isEmpty(data.last_name)) {
        errors.last_name = 'Last name is required';
    }

    if (!Validator.isLength(data.last_name, { min: 2 })) {
        errors.last_name = 'Last name must be a minimun of 2 characters';
    }

    if (!Validator.isLength(data.last_name, { max: 15 })) {
        errors.last_name = 'Last name must be a maximum of 15 characters';
    }

    if (Validator.isEmpty(data.gender)) {
        errors.gender = 'Gender is required';
    }

    if (Validator.isEmpty(data.date_of_birth)) {
        errors.date_of_birth = 'Date of birth is required';
    }

    if (Validator.isEmpty(data.grade)) {
        errors.grade = 'Grade is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};