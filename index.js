const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler');

//Routes
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');

//Config
app.use(express.json());

//Endpoints
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);

//Errors
app.use(errorHandler);
app.use(function (req, res) {
  res.status(404).json({ message: 'Page Not Found' });
});

app.listen(3000, () => console.log('Running'));
