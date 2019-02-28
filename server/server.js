const path = require('path')
const express = require('express')
const server = express()

const fekeRoute = require('./routes/feke')
const greetingsRoute = require('./routes/greetings')
const familyRoute = require('./routes/family')
const numbersRoute = require('./routes/numbers')
// import Routes here

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// placeholder for api
server.use('/api/v1/feke', fekeRoute)
server.use('/api/v1/category/greetings', greetingsRoute)
server.use('/api/v1/category/family', familyRoute)
server.use('/api/v1/category/numbers',numbersRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server

