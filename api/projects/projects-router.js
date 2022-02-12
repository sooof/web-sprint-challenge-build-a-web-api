// Write your "projects" router here!
const router = require("express").Router()
const {
    validateProjectsId,
    validateProjects,
  } = require('./projects-middleware')
  const Project = require('./projects-model')

router.get('/', (req, res, next) => {
    // res.json({message: "get /api/projects"})
    // console.log(req.project)
    Project.get()
        .then( projects =>{
            res.json(projects)
        })
        .catch(next)
  });
  
  router.get('/:id', validateProjectsId, (req, res) => {
    //   res.json({message: "get /api/projects/:id"})
    // console.log(req.project)
    res.json(req.project)
  });
  // TEST ERR: http post  :9000/api/users 
  // TEST : http post  :9000/api/users name=aaaa
  router.post('/', validateProjects, async (req, res, next) => {
    //   res.json({message: "post /api/projects"})
    // console.log(req.name)
    // Project.insert(res.body)
    //     .then( project=>{
    //         res.status(201).json(project)
    //     })
    //     .catch(next)
    try{
        const project =  await Project.insert(req.body)
        res.status(201).json(project)
    }catch(err){
        next(err)
    }
  });
  
  router.put('/:id', validateProjectsId, validateProjects, (req, res, next) => {
    //   res.json({message: "put /api/projects/:id"})
    // console.log(req.project)
    // console.log(req.name)
    // const {completed} = req.body
    // if(!completed){
    //     res.status(400).json({ message: "Please provide name or description for the projects" })
    // }else{
    Project.update(req.params.id, req.body)
        .then( result=>{
            // console.log(result)
            res.json(result) 
        })
        .catch(next)
    // }


  });
  
  router.delete('/:id', validateProjectsId, (req, res, next) => {
    //   res.json({message: "delete /api/projects"})
    // console.log(req.project)
    Project.remove(req.params.id)
        .then( project=>{
            res.json(res.project)
        })
        .catch(next)
  });

  router.get('/:id/actions', validateProjectsId, async (req, res, next)=>{
    //   res.json({message: "get /api/projects/:id/actions"})
    //   console.log("")
    Project.getProjectActions(req.params.id)
        .then( result=>{
            console.log(result)
            res.json(result)
        })
        .catch(next)
  })

module.exports = router