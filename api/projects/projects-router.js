// Write your "projects" router here!
const router = require("express").Router()
const {
    validateProjectsId,
    validateProjects,
  } = require('./projects-middleware')

router.get('/', (req, res) => {
    res.json({message: "get /api/projects"})
    console.log(req.project)
  });
  
  router.get('/:id', validateProjectsId, (req, res) => {
      res.json({message: "get /api/projects/:id"})
    console.log(req.project)
  });
  // TEST ERR: http post  :9000/api/users 
  // TEST : http post  :9000/api/users name=aaaa
  router.post('/', validateProjects, (req, res) => {
      res.json({message: "post /api/projects"})
    console.log(req.name)
  });
  
  router.put('/:id', validateProjectsId, validateProjects, (req, res) => {
      res.json({message: "put /api/projects/:id"})
    // console.log(req.project)
    // console.log(req.name)
  });
  
  router.delete('/:id', validateProjectsId, (req, res) => {
      res.json({message: "delete /api/projects"})
    // console.log(req.project)
  });

  router.get('/:id/actions', (req, res)=>{
      res.json({message: "get /api/projects/:id/actions"})
    //   console.log("")
  })

module.exports = router