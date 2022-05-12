const express = require('express');
const router = express.Router();
const errorWrapper = require('../middlewares/errorWrapper');
const { verifyToken } = require('../middlewares/tokenHandler');
const validate = require('../middlewares/validations/projects');

const projectsController = require('../controllers/projects');

router.get(
  '/',
  [verifyToken],
  errorWrapper(async (req, res) => {
    const { name } = req.query;
    const { page, limit } = req.body;
    const filters = { name: name };
    const projects = await projectsController.list(page, limit, filters);
    res.status(200).json({ response: projects });
  })
);

router.get(
  '/:id',
  [verifyToken],
  errorWrapper(async (req, res) => {
    const { id } = req.params;
    const project = await projectsController.search(id);
    res.status(200).json({ response: project });
  })
);

router.post(
  '/',
  [verifyToken, validate.create],
  errorWrapper(async (req, res) => {
    const { name, description, managers, assignees, status } = req.body;
    const newProject = await projectsController.create(
      name,
      description,
      managers,
      assignees,
      status
    );
    res.status(201).json({ response: newProject });
  })
);

router.post(
  '/:id/edit',
  [verifyToken, validate.edit],
  errorWrapper(async (req, res) => {
    const { name, description, status } = req.body;
    const { id } = req.params;
    const updatedProject = await projectsController.edit(
      id,
      name,
      description,
      status
    );
    res.status(200).json({ response: updatedProject });
  })
);

router.post(
  '/:id/members',
  [verifyToken, validate.addMembers],
  errorWrapper(async (req, res) => {
    const { managers, assignees } = req.body;
    const { id } = req.params;
    const newMembers = await projectsController.addMember(
      id,
      managers,
      assignees
    );
    res.status(200).json({ response: newMembers });
  })
);

router.delete(
  '/:id/members',
  [verifyToken, validate.removeMembers],
  errorWrapper(async (req, res) => {
    const { id } = req.params;
    const { members } = req.body;
    const deletedMembers = await projectsController.removeMember(id, members);
    res.status(200).json({ response: deletedMembers });
  })
);

router.delete(
  '/:id',
  [verifyToken],
  errorWrapper(async (req, res) => {
    const { id } = req.params;
    const isProjectDeleted = await projectsController.eliminate(id);
    res.status(200).json({ response: isProjectDeleted });
  })
);
module.exports = router;
