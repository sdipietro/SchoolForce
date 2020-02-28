const express = require("express");
const router = express.Router();
const Reminder = require('../../models/Reminder');
const config = require('../../config/keys')
const passport = require('passport')
// const client = require('twilio')(config.accountSid, config.authToken);

// const validateReminderInput = require('../../validation/reminders');

router.get("/test", (req, res) => res.json({ msg: "This is the reminders route" }));

// router.get('/', (req, res) => {
//     Reminder.find()
//         .then(reminders => res.json(reminders))
//         .catch(err => res.status(404).json({ noRemindersFound: 'No reminders found' }));
// });

// router.get('/:title', (req, res) => {
//     Reminder.findById(req.params.title)
//         .then(reminder => res.json(reminder))
//         .catch(err =>
//             res.status(404).json({ noRemindersFound: 'No reminder found with that title' })
//         );
// });


// router.post('/new',
//     // passport.authenticate('jwt', { session: false }),
//     (req, res) => {

//     //     const { errors, isValid } = validateReminderInput(req.body);

//     //     if (!isValid) {
//     //         return res.status(400).json(errors);
//     //     }

//         const newReminder = new Reminder({
//             title: req.body.text,
//             body: req.body.body,
//             parentId: [req.body.parentId],
//             authorId: req.user.id,
//             createdDate: req.body.createdDate
//         });

//         newReminder.save().then(reminder => res.json(reminder));
// //             // .then(() => 
// //             // arrayOfNumbers.forEach((number, reminder) => {
// //             //         client.messages
// //             //         .create({
// //             //             body: reminder.body,
// //             //             from: config.twilioNumber,
// //             //             to: number
// //             //         })
// //             //         .then(() => {
// //             //             res.status(200).send('Reminder was successfully sent');
// //             //         })
// //             //         .catch((err) => {
// //             //             console.error(err);
// //             //             response.status(500).send();
// //             //         })
// //             // })
// // });


router.post('/new', (req, res) => {
    debugger
        const newReminder = new Reminder({
            title: req.body.text,
            body: req.body.body,
            // parentId: [req.body.parentId],
            // authorId: req.body.id
        });
        
        newReminder.save()
        .then(() => console.log(newReminder));
});

module.exports = router;