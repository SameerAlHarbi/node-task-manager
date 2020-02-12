const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    }, age: {
        type: Number,
        default: 20,
        validate(value) {
            if(value < 0) {
                throw new Error('Age can not less than 0');
            }
        }
    }, email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        default: 'smrhrbi@gmail.com',
        validate(value) {
            if(!validator.isEmail(value)) {
                console.log('not email.')
                th
            }
        }
    }, password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('password cant contain "Password"');
            }
        }
    }
});

module.exports = User;