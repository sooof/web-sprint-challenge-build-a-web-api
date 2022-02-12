const express = require('express');
const {
    logger
  } = require('./actions/actions-middlware')

const server = express();
const  projectsRouter = require('./projects/projects-router.js')
const  actionsRouter = require('./actions/actions-router.js')

server.use(express.json())
server.use(logger)
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.use('*', (req, res)=>{
    res.status(404).json({message: `${req.method} ${req.baseUrl}, not found!!!`})
  })

server.use((err, req, res, next)=>{// eslint-disable-line
  console.log('ERR')
  res.status(err.status || 500).json({
    message: `The Horror: ${err.message}`,
  })
})

module.exports = server;
