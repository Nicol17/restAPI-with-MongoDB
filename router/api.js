const express = require('express');
const router = express.Router();

const Student = require('../models/student')

// ROUTES

router.get('/students', (req, res) => {
    Student.find({}).then(function(students){
        res.send(students);
    }).catch(next);
});

router.post('/students', (req, res) => {
    Student.create(req.body).then(function(student){
        res.send(student)
    }).catch(next);
    });

router.put('/students/:id', (req, res) => {
    Student.findOneAndUpdate({ _id: req.params.id}, req.body).then(function(student){
        Student.findOne({_id: req.params.id}).then(function(student){
            res.send(student);
        });
    });
});

router.delete('/students/:id', (req, res) => {
    Student.findOneAndDelete({_id: req.params.id}).then(function(student){
        res.send(student);
    })
})

module.exports = router;