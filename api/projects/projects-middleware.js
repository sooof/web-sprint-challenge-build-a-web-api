
const Project = require('./projects-model')
async function validateProjectsId(req, res, next) {
    try{
        const project = await Project.get(req.params.id)
        if(!project){
            res.status(404).json({ message: "Project not found" })
        }else{
            req.project = project
            next()
        }
    }catch(err){
        next(err)
    }
}

function validateProjects(req, res, next) {
    try{
        const {name, description} = req.body
        if(!name|| !name.trim() || !description || !description.trim()){
            res.status(400).json({ message: "Please provide name or description for the projects" })
        }else{
            next()
        }
    }catch(err){
        next(err)
    }
}

module.exports ={

    validateProjectsId,
    validateProjects,
}