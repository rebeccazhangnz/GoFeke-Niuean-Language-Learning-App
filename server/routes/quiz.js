const express = require('express')
const db = require('../db/quiz')
const router = express.Router()

router.get('/', (req, res) => {
  db.getQuestions()
    .then(Questions => {
      res.json(Questions)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

module.exports = router