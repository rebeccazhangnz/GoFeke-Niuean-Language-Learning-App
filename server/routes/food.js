const express = require('express')
const db = require('../db/food')
const router = express.Router()

// This api gets the feke from the database
router.get('/', (req, res) => {
  db.getFood()
    .then(food => {
      res.json(food)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
