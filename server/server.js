const path = require('path')
const express = require('express')
const server = express()

const fekeRoute = require('./routes/feke')
const greetingsRoute = require('./routes/greetings')
const categoryRoute = require('./routes/category')
const familyRoute = require('./routes/family')
// import Routes here

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// placeholder for api
server.use('/api/v1/feke', fekeRoute)
server.use('/api/v1/category/greetings', greetingsRoute)
server.use('/api/v1/category/family', categoryRoute)
server.use('/api/v1/category/family', familyRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server

