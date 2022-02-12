const router = require("express").Router();
const Action = require("./actions-model.js");
const { validateActionsId, validateActions } = require("./actions-middlware");

router.get("/", (req, res, next) => {
  Action.get()
    .then((action) => {
      res.json(action);
    })
    .catch(next);
});

router.get("/:id", validateActionsId, (req, res) => {
  res.json(req.action);
});

router.post("/", validateActions, (req, res, next) => {
  Action.insert(req.body)
    .then((actions) => {
      res.status(201).json(actions);
    })
    .catch(next);
});

router.put("/:id", validateActionsId, validateActions, (req, res, next) => {
  Action.update(req.params.id, req.body)
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});

router.delete("/:id", validateActionsId, (req, res, next) => {
  Action.remove(req.params.id)
    .then((action) => {
      res.json(req.action);
    })
    .catch(next);
});

module.exports = router;
