const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler');

//Routes
const authRoutes = require('./routes/auth');

//Config
app.use(express.json());

//Endpoints
app.use('/auth', authRoutes);

//Errors
app.use(errorHandler);

app.listen(3000, () => console.log('Running'));
