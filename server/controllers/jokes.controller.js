const Jokes = require('../models/jokes.model'),
    mongoose = require('mongoose');

module.exports = {
    index : (req,res) => {
        Jokes.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    create : (req,res) => {
        Jokes.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    show : (req,res) => {
        Jokes.findOne({_id:req.params.id})
        .then(jokes => {
            res.json({results:jokes})
        })
        .catch(err => res.json(err.errors))
    },
    update: (req,res) => {
        Jokes.findOneAndUpdate({_id:req.params.id}, req.body)
            .then(jokes => {
                res.json({results:jokes})
            })
            .catch(err => res.json(err.errors))
    }
}