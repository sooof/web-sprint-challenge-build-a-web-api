// add middlewares here related to actions

const Actions = require('./actions-model')

function logger(req, res, next) {
//   console.log("logger midlleware")
//   next()
    console.log(`Time Stamp: ${new Date().toLocaleString()}, Request Method: ${req.method}, Request USL: ${req.url}`)
    next()
}


async function validateActionsId(req, res, next) {
// console.log("validateActionsId midlleware")
// next()
    try{
        const action = await Actions.get(req.params.id)
        if(!action){
            res.status(404).json({ message: "Actions not found" })
        }else{
            req.action = action
            next()
        }
    }catch(err){
        next(err)
    }
}

function validateActions(req, res, next) {
// console.log("validateActions midlleware")
// next()
    try{
        const {project_id, description, notes, } = req.body
        if(!project_id || !notes || !notes.trim() || !description || !description.trim()){
            res.status(400).json({ message: "Please provide project_id, description, notes for the projects" })
        }else{
            next()
        }
    }catch(err){
        next(err)
    }
}

module.exports ={
    logger,
    validateActionsId,
    validateActions,
}