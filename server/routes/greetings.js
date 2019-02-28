const express = require('express')
const db = require('../db/greetings')
const router = express.Router()

// This api gets the feke from the database
router.get('/', (req, res) => {
  db.getGreetings()
  .then(greetings => {
  res.json(greetings)
  })
  .catch(err => {
  res.status(500).send('DATABASE ERROR: ' + err.message)
  })
  })
  
  module.exports = router