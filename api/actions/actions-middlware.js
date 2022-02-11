// add middlewares here related to actions

function logger(req, res, next) {
//   console.log("logger midlleware")
//   next()
    console.log(`Time Stamp: ${new Date().toLocaleString()}, Request Method: ${req.method}, Request USL: ${req.url}`)
    next()
}


async function validateActionsId(req, res, next) {
console.log("validateActionsId midlleware")
next()
}

function validateActions(req, res, next) {
console.log("validateActions midlleware")
next()
}

module.exports ={
    logger,
    validateActionsId,
    validateActions,
}