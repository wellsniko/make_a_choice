const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.handle = validText(data.handle) ? data.handle : '';
    data.password = validText(data.password) ? data.password : '';

    // if (!Validator.isEmail(data.email)) {
    //     errors.email = 'Email is invalid';
    // }

    if (Validator.isEmpty(data.handle)) {
        errors.email = 'Please enter your email';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};