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
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    parent_2_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    allergies: {
        type: [String]
    },
    special_needs: {
        type: [String]
    },
    medical_conditions: {
        type: [String]
    },
    gender: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    start_date: {
        type: Date,
        default: Date.now
    },
    grade: {
        type: String,
        required: true
    }
});

module.exports = Student = mongoose.model('student', StudentSchema);