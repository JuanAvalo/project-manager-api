const path = require('path');
require('dotenv').config();

swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Project Manager',
      description:
        'RESTful API that allows you to manage you projects. Remember to Authorize with your token to try the Projects functionality',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'apiKey',
          name: 'authorization',
          scheme: 'bearer',
          in: 'header',
        },
      },
    },
    security: [
      {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    ],
    servers: [
      {
        url: process.env.URL,
      },
    ],
  },
  apis: [`${path.join(__dirname, '/*.js')}`],
};

module.exports = swaggerSpec;
