const req = require('express/lib/request');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Unauthorized = require('../errors/unauthorized');

const jwtKey = process.env.JWT_KEY;
const jwtExpirySeconds = 3600;

//Used to create and send a token to the user after a successfull LogIn
const createToken = (user) => {
  const token = jwt.sign({ user }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds,
  });
  return token;
};

//Verify if the auth token sent by the user is valid
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) throw new Unauthorized();
  jwt.verify(authHeader, jwtKey, function (error, decoded) {
    if (error) throw new Unauthorized();
    req.user = decoded;
    next();
  });
};

module.exports = {
  createToken,
  verifyToken,
};
