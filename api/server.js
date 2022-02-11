const express = require('express');
const server = express();
const  projectsRouter = require('./projects/projects-router.js')
const  actionsRouter = require('./actions/actions-router.js')

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.use('*', (req, res)=>{
    res.status(404).json({message: `${req.method} ${req.baseUrl}, not found!!!`})
  })

server.use((err, req, res, next)=>{
  console.log('ERR')
  res.status(err.status || 500).json({
    message: `The Horror: ${err.message}`,
  })
})

module.exports = server;
