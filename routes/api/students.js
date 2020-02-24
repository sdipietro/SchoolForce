const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Student = require('../../models/Student');
const validateStudentInput = require('../../validation/students');


router.get('/students', (req, res) => {
    Student.find()

});

router.get('/students/:studentId', (req, res) => {
    Student.find({ user: req.params.parentId })

});

router.post('/students/:studentId', (req, res) => {
    Student.find({ user: req.params.userId })

});

router.put('/students/:studentId/edit', (req, res) => {
    Student.find({ user: req.params.userId })

});

router.delete('/students/:studentId', (req, res) => {
    Student.find({ user: req.params.userId })

});


//------------------



router.get('/', (req, res) => {
    Student.find()
        .then(Students => res.json(Students))
        .catch(err => res.status(404).json({ noStudentsFound: 'No students found' }));
});

router.get('/user/:userId', (req, res) => {
    Student.find({ user: req.params.userId })
        .sort({ date: -1 })
        .then(Students => res.json(Students))
        .catch(err =>
            res.status(404).json({ noStudentsFound: 'No students found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Student.findById(req.params.id)
        .then(Student => res.json(Student))
        .catch(err =>
            res.status(404).json({ noStudentsFound: 'No Student found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateStudentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newStudent = new Student({
            text: req.body.text,
            user: req.user.id
        });

        newStudent.save().then(Student => res.json(Student));
    }
);

module.exports = router;