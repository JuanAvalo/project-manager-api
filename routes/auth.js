const express = require('express');
const router = express.Router();
const errorWrapper = require('../middlewares/errorWrapper');

const authController = require('../controllers/auth');

router.post(
  '/register',
  errorWrapper(async (req, res) => {
    const { name, email, password } = req.body;
    const registerUser = await authController.register(name, email, password);
    res.status(201).json({ response: registerUser });
  })
);

router.post(
  '/login',
  errorWrapper(async (req, res) => {
    const { email, password } = req.body;
    const loggedUser = await authController.login(email, password);
    res.status(200).json({ response: loggedUser });
  })
);

module.exports = router;
