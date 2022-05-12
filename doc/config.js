const path = require('path');

swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Project Manager',
      description: 'RESTful API that allows you to manage you projects',
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
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [`${path.join(__dirname, '/*.js')}`],
};

module.exports = swaggerSpec;
