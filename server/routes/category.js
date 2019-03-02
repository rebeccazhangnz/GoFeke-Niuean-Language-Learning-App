const express = require('express')
const db = require('../db/category')
const router = express.Router()

router.get('/', (req, res)=>{
   db.getCategoryList()
   .then(list=>{
     res.json(list)
   })
   .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
router.get('/:name', (req, res) => {
  const name = req.params.name
  db.getCategoryIdByName(name)
    .then(item => {
      db.getContent(item[0].id)
        .then(content => {
          res.json(content)
        })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
