// Require babel-register for ES6
require('@babel/register');

// Node Modules
const express = require('express');

// Mongoose Models
const HackerNew = require('../../models/news');

// Router
const router = new express.Router();

// Get all Hacker News
router.get('/news', (req, res) => {
  return HackerNew.find({ }, (err, data) => {
    if (err) res.status(400).send(err);
    return res.status(200).send(data);
  });
});

// Remove a Hacker New on the client
router.post('/remove', (req, res) => {
  const { id } = req.body;
  HackerNew.update({ _id: id }, { $set: { show: false } }, { new: true }, (err, data) => {
    if (err) res.status(400).send(err);
    return res.status(200).send(data);
  });
});

// Export Router
module.exports = router;
