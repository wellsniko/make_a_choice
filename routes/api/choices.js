const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Choice = require('../../models/Choice');
const validateChoiceInput = require('../../validation/choices');

router.get('/', (req, res) => {
    Choice.find()
        .sort({ date: -1 })
        .then(choices => res.json(choices))
        .catch(err => res.status(404).json({ nochoicesfound: 'No choices found' }));
});

router.get('/user/:user_id', (req, res) => {
    Choice.find({ user: req.params.user_id })
        .then(choices => res.json(choices))
        .catch(err =>
            res.status(404).json({ nochoicesfound: 'No choices found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Choice.findById(req.params.id)
        .then(choice => res.json(choice))
        .catch(err =>
            res.status(404).json({ nochoicefound: 'No choice found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateChoiceInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newChoice = new Choice({
            text: req.body.text,
            user: req.user.id
        });

        newChoice.save().then(choice => res.json(choice));
    }
);


module.exports = router;