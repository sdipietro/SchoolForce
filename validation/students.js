const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateStudentInput(data) {
    let errors = {};

    data.firstName = validText(data.firstName) ? data.firstName : '';
    data.lastName = validText(data.lastName) ? data.lastName : '';
    data.gender = validText(data.gender) ? data.gender : '';
    data.dateOfBirth = validText(data.dateOfBirth) ? data.dateOfBirth : '';
    data.startDate = validText(data.startDate) ? data.startDate : '';
    data.grade = validText(data.grade) ? data.grade : '';


    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = 'First name is required';
    }

    if (!Validator.isLength(data.firstName, { min: 2 })) {
        errors.firstName = 'First name must be a minimun of 2 characters';
    }

    if (!Validator.isLength(data.firstName, { max: 15 })) {
        errors.firstName = 'First name must be a maximum of 15 characters';
    }

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'Last name is required';
    }

    if (!Validator.isLength(data.lastName, { min: 2 })) {
        errors.lastName = 'Last name must be a minimun of 2 characters';
    }

    if (!Validator.isLength(data.lastName, { max: 15 })) {
        errors.lastName = 'Last name must be a maximum of 15 characters';
    }

    if (Validator.isEmpty(data.gender)) {
        errors.gender = 'Gender is required';
    }

    if (Validator.isEmpty(data.dateOfBirth)) {
        errors.dateOfBirth = 'Date of birth is required';
    }

    if (Validator.isEmpty(data.startDate)) {
        errors.startDate = 'Start date is required';
    }

    if (Validator.isEmpty(data.grade)) {
        errors.grade = 'Grade is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};