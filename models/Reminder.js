const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReminderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    parentId: {
        type: [String],
        required: true
    },
    authorId: {
        type: Number,
        required: true
        // type: Schema.Types.ObjectId,
        // ref: 'users', 
        // required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = Reminder = mongoose.model('reminder', ReminderSchema);