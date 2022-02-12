

// Write your "actions" router here!
const router = require("express").Router()
const Action = require('./actions-model.js')
const {
    validateActionsId,
    validateActions,
} = require('./actions-middlware')

router.get('/', (req, res, next) => {
    // res.json({message: "get /api/actions"})
    // console.log(req.actions)
    Action.get()
        .then( action=>{
            res.json(action)
        })
        .catch(next)
  });
  
  router.get('/:id', validateActionsId, (req, res) => {
    // res.json({message: "get /api/actions/:id"})
    // console.log(req.project)
    res.json(req.action)
  });
//   // TEST ERR: http post  :9000/api/users 
//   // TEST : http post  :9000/api/users name=aaaa
  router.post('/', validateActions, (req, res, next) => {
    // res.json({message: "post /api/actions"})
    // console.log(req.name)
    Action.insert(req.body)
        .then( actions=>{
            res.status(201).json(actions)
        })
        .catch(next)
  });
  
  router.put('/:id', validateActionsId, validateActions, (req, res, next) => {
    // res.json({message: "put /api/actions/:id"})
    // console.log(req.project)
    // console.log(req.name)
    Action.update(req.params.id, req.body)
        .then( result=>{
            // console.log(result)
            res.json(result) 

        })
        .catch(next)

  });
  
  router.delete('/:id', validateActionsId, (req, res, next) => {
    // res.json({message: "delete /api/actions/:id"})
    // console.log(req.project)
    Action.remove(req.params.id)
        .then( action=>{
            res.json(req.action)
        })
        .catch(next)
  });
  


module.exports = router
