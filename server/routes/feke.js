const express = require('express')
const db = require('../db/feke')
const router = express.Router()

// This api gets the feke from the database

router.get('/', (req, res) => {
  db.getFeke()
    .then(feke => {
      res.json(feke)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/', (req, res) => {
  db.updateFeke(req.body)
    .then(()=> db.getFeke())
    .then(feke => {
      res.json(feke)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
