// add middlewares here related to projects

async function validateProjectsId(req, res, next) {
    console.log("validateProjectsId midlleware")
    next()
}

function validateProjects(req, res, next) {
    console.log("validateProjects midlleware")
    next()
}

module.exports ={

    validateProjectsId,
    validateProjects,
}