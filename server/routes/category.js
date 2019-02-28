const express = require('express')
const db = require('../db/category')
const router = express.Router()

// This api gets the category from the database

router.get('/', (req, res) => {
  db.getCategories()
    .then(category => {
      res.json(category)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router