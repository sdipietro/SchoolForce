const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../../config/keys');
const client = require('twilio')(config.accountSid, config.authToken);

const Reminder = require('../../models/Reminder');
const validateReminderInput = require('../../validation/reminders');

router.get("/test", (req, res) => res.json({ msg: "This is the reminders route" }));

router.get('/reminders', (req, res) => {
    Reminder.find()
        .then(reminders => res.json(reminders))
        .catch(err => res.status(404).json({ noRemindersFound: 'No reminders found' }));
});

router.get('/reminders/:title', (req, res) => {
    Reminder.findById(req.params.title)
        .then(reminder => res.json(reminder))
        .catch(err =>
            res.status(404).json({ noRemindersFound: 'No reminder found with that title' })
        );
});

router.post('/:reminders',
    config.passport.authenticate('jwt', { session: false }),
    (req, res) => {
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

        newReminder.save().then(reminder => res.json(reminder))
            .then(client.messages
            .create({
                body: newReminder.title,
                from: config.twilioNumber, 
                to: "+1" + newReminder.recipientId[0] 
                })
            )
            .then(() => {
                res.status(200).send('Reminder was successfully sent');
            })
            .catch((err) => {
                console.error(err);
                response.status(500).send();
            })
        }
);

module.exports = router;
