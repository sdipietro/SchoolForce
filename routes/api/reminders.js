const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Reminder = require('../../models/Reminder');
const validateReminderInput = require('../../validation/reminders');

router.get("/test", (req, res) => res.json({ msg: "This is the reminders route" }));

router.get('/', (req, res) => {
    Reminder.find()
        .then(reminders => res.json(reminders))
        .catch(err => res.status(404).json({ noRemindersFound: 'No reminders found' }));
});

router.get('/user/:userId', (req, res) => {
    Reminder.find({ admin: req.params.userId })
        .then(reminders => res.json(reminders))
        .catch(err =>
            res.status(404).json({ noRemindersFound: 'No reminders found from that admin' }
            )
        );
});

router.get('/:title', (req, res) => {
    Reminder.findById(req.params.id)
        .then(reminder => res.json(reminder))
        .catch(err =>
            res.status(404).json({ noRemindersFound: 'No reminder found with that title' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log(req)

        const { errors, isValid } = validateReminderInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newReminder = new Reminder({
            title: req.body.text,
            body: req.body.body,
            recipientId: [req.body.recipientId],
            authorId: req.user.id,
            createdDate: req.body.createdDate
        });

        console.log(newReminder);

        newReminder.save().then(reminder => res.json(reminder));
    }
);

module.exports = router;