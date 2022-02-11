

// Write your "actions" router here!
const router = require("express").Router()

const {
    validateActionsId,
    validateActions,
} = require('./actions-middlware')

router.get('/', (req, res) => {
    res.json({message: "get /api/projects"})
    // console.log(req.project)
  });
  
  router.get('/:id', validateActionsId, (req, res) => {
    res.json({message: "get /api/projects/:id"})
    // console.log(req.project)
  });
//   // TEST ERR: http post  :9000/api/users 
//   // TEST : http post  :9000/api/users name=aaaa
  router.post('/', validateActions, (req, res) => {
    res.json({message: "post /api/projects"})
    // console.log(req.name)
  });
  
  router.put('/:id', validateActionsId, validateActions, (req, res) => {
    res.json({message: "put /api/projects/:id"})
      res.json(" get /api/actions")
    // console.log(req.project)
    // console.log(req.name)
  });
  
  router.delete('/:id', validateActionsId, (req, res) => {
    res.json({message: "delete /api/projects/:id"})
    // console.log(req.project)
  });
  


module.exports = router
