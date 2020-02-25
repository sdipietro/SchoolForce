const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReminderInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.body = validText(data.body) ? data.body : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title is required';
    }

    if (!Validator.isLength(data.title, { min: 5, max: 50})) {
        errors.title = 'Title must be between 5 and 50 characters';
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = 'Body field is required';
    }

    if (!Validator.isLength(data.body, { min: 5, max: 160 })) {
        errors.body = 'Body must be between 5 and 160 characters';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};