const express = require('express')
// const db = require('../db/status')
const router = express.Router()

// This api gets the feke from the database
router.get('/', (req, res) => {
    db.getStatus()
      .then(status => {
        res.json(status)
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

module.exports = router