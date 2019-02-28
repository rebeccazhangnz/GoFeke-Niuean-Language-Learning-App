const express = require('express')
const db = require('../db/numbers')
const router = express.Router()

// This api gets the numbers from the database
router.get('/', (req, res) => {
  db.getNumbers()
  .then(numbers => {
  res.json(numbers)
  })
  .catch(err => {
  res.status(500).send('DATABASE ERROR: ' + err.message)
  })
  })
  
  module.exports = router