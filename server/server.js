const path = require('path')
const express = require('express')
const server = express()

// const placeholderRoutes = require('./routes/placeholder')
// import Routes here

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// placeholder for api
// server.use('/api/v1/placeholder', placeholderRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server