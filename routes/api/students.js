const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')

const Student = require('../../models/Student');
const validateStudentInput = require('../../validation/student');

router.get("/test", (req, res) => res.json({ msg: "This is the students route" }));


router.get('/', (req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => 
            res.status(404).json({ noStudentsFound: 'No students found' }
            )
        );
});

router.get('/:parentId', (req, res) => {
    Student.find({ student: req.params.parentId })
        .then(students => res.json(students))
        .catch(err =>
            res.status(404).json({ noStudentsFound: 'No student found from that parent' }
            )
        );
});

router.get('/:id', (req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err =>
            res.status(404).json({ noStudentsFound: 'No student found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log(req);

        const { errors, isValid } = validateStudentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newStudent = new Student({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            parentId: req.user.id,
            allergies: req.body.firstName,
            specialNeeds: req.body.specialNeeds,
            medicalConditions: req.body.medicalConditions,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            startDate: req.body.startDate,
            grade: req.body.grade
        });

        console.log(newStudent);

        newStudent.save().then(student => res.json(student));
    }
);

module.exports = router;
