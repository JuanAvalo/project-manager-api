const express = require('express');
const router = express.Router();
const errorWrapper = require('../middlewares/errorWrapper');

const projectsController = require('../controllers/projects');

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

module.exports = router;
