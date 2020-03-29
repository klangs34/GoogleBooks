const express = require("express");
const Router = express.Router();
const db = require('../models');

Router.get('/books', (req, res) => {
    db.GoogleBooks.find({})
        .then(data => res.json(data))
})
Router.post('/books', (req, res) => {
    db.GoogleBooks.collection.insertOne(req.body, { new: true })
        .then(data => res.json(data))
})
Router.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    db.GoogleBooks.findByIdAndDelete(id, (err, response) => {
        if (err) throw err;
        res.json(response);
    })
})

module.exports = Router;