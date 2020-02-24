const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Reminder = require('../../models/Reminder');
const validateReminderInput = require('../../validation/Reminders');

router.get('/', (req, res) => {
    Reminder.find()
        .sort({ date: -1 })
        .then(Reminders => res.json(Reminders))
        .catch(err => res.status(404).json({ noRemindersFound: 'No reminders found' }));
});

router.get('/user/:userId', (req, res) => {
    Reminder.find({ user: req.params.userId })
        .sort({ date: -1 })
        .then(Reminders => res.json(Reminders))
        .catch(err =>
            res.status(404).json({ noRemindersFound: 'No reminders found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Reminder.findById(req.params.id)
        .then(Reminder => res.json(Reminder))
        .catch(err =>
            res.status(404).json({ noRemindersFound: 'No Reminder found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateReminderInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newReminder = new Reminder({
            text: req.body.text,
            user: req.user.id
        });

        newReminder.save().then(Reminder => res.json(Reminder));
    }
);

module.exports = router;