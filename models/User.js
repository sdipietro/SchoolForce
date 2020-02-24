const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    schoolId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    mobile: {
        //making mobile a string because .isMobile function in validator takes a string 
        type: String,
        require: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
      }
    });


module.exports = User = mongoose.model('users', UserSchema);



