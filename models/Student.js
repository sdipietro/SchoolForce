const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    parent_1_id: {
        type: String,
        required: true
    },
    parent_2_id: {
        type: String,
        required: false
    },
    contact_numbers: {
        type: String,
        required: true
    },
    allergies: {
        type: String,
        required: true
    },
    special_needs: {
        type: String,
        required: true
    },
    medical_conditions: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        default: Date.now
    },
    grade: {
        type: Date,
        default: Date.now
    }
});

module.exports = Student = mongoose.model('student', StudentSchema);