const router = require("express").Router();
const {
  validateProjectsId,
  validateProjects,
} = require("./projects-middleware");
const Project = require("./projects-model");

router.get("/", (req, res, next) => {
  Project.get()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

router.get("/:id", validateProjectsId, (req, res) => {
  res.json(req.project);
});

router.post("/", validateProjects, async (req, res, next) => {
  try {
    const project = await Project.insert(req.body);
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", validateProjectsId, validateProjects, (req, res, next) => {
  Project.update(req.params.id, req.body)
    .then((result) => {
      res.json(result);
    })
    .catch(next);
  // }
});

router.delete("/:id", validateProjectsId, (req, res, next) => {
  Project.remove(req.params.id)
    .then((project) => {
      res.json(res.project);
    })
    .catch(next);
});

router.get("/:id/actions", validateProjectsId, async (req, res, next) => {
  Project.getProjectActions(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(next);
});

module.exports = router;
