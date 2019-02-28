const express = require('express')
const db = require('../db/feke')
const router = express.Router()

// This api gets the feke from the database
router.post('/', (req, res) => {
    db.createFeke()
      .then(feke => {
        res.json(feke)
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

module.exports = router