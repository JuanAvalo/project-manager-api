const express = require('express');
const router = express.Router();
const errorWrapper = require('../middlewares/errorWrapper');

const projectsController = require('../controllers/projects');

router.get(
  '/',
  errorWrapper(async (req, res) => {
    const { page, limit } = req.body;
    const projects = await projectsController.list(page, limit);
    res.status(200).json(projects);
  })
);

router.post(
  '/',
  errorWrapper(async (req, res) => {
    const { name, description, users, status } = req.body;
    const newProject = await projectsController.create(
      name,
      description,
      users,
      status
    );
    res.status(201).json({ response: newProject });
  })
);

router.post(
  '/:id/edit',
  errorWrapper(async (req, res) => {
    const { name, description, users, status } = req.body;
    const { id } = req.params;
    const updatedProject = await projectsController.edit(
      id,
      name,
      description,
      users,
      status
    );
    res.status(200).json({ response: updatedProject });
  })
);

router.delete(
  '/:id',
  errorWrapper(async (req, res) => {
    const { id } = req.params;
    const isProjectDeleted = await projectsController.eliminate(id);
    res.status(200).json({ response: isProjectDeleted });
  })
);
module.exports = router;
