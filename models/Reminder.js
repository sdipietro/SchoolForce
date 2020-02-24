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
    recipient_id: {
        type: [Schema.Types.ObjectId],
        ref: 'users',
        required: true
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Reminder = mongoose.model('reminder', ReminderSchema);