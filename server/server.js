const path = require('path')
const express = require('express')
const server = express()

const fekeRoute = require('./routes/feke')
const statusRoute = require('./routes/status')
const categoryRoute = require('./routes/category')
// import Routes here

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// placeholder for api
server.use('/api/v1/feke', fekeRoute)
server.use('/api/v1/status', statusRoute)
server.use('/api/v1/category/family', categoryRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server

