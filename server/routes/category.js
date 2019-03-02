const express = require('express')
const db = require('../db/category')
const router = express.Router()

<<<<<<< HEAD
router.get('/', (req, res)=>{
   db.getCategoryList()
   .then(list=>{
     res.json(list)
   })
   .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
||||||| merged common ancestors
// This api gets the greetings from the database
=======
router.get('/', (req, res) => {
  db.getCategoryList()
    .then(list => {
      res.json(list)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

// This api gets the perticular category under 'name' from the database
>>>>>>> 2a89eb27549ffa446419cde25816aef197256bec
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
