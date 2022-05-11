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

module.exports = router;
