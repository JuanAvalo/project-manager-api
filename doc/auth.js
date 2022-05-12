/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *       type: object
 *       properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *          password:
 *            type: string
 *       required:
 *         - name
 *         - email
 *         - password
 *
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *       tags: ["User"]
 *       summary: Register a User
 *       description: Register
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/User'
 *              examples:
 *                Successfully Registered:
 *                  value:
 *                    "name": "Juan"
 *                    "email": "avalojuanma@gmail.com"
 *                    "password" : "Atestpw123"
 *                Mail already taken:
 *                  value:
 *                    "name": "Juan"
 *                    "email": "avalojuanma@gmail.com"
 *                    "password" : "Atestpw123"
 *                Password does not meet minimum requirements:
 *                  value:
 *                    "name": "Luis"
 *                    "email": "test@test.com"
 *                    "password" : "simplepw"
 *                Missing field (email):
 *                  value:
 *                    "name": "Martin"
 *                    "password" : "Avalidpw123"
 *       responses:
 *         '201':
 *           description: Created
 *         '409':
 *           description: Conflict
 *         '422':
 *           description: Unprocessable Entity
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *       tags: ["User"]
 *       summary: Login User
 *       description: Login
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/User'
 *              examples:
 *                Missing fields:
 *                  value:
 *                    "password" : "Justthepw"
 *                Incorrect Password:
 *                  value:
 *                    "email" : "avalojuanma@gmail.com"
 *                    "password" : "Awrongpw123"
 *                Incorrect Email:
 *                  value:
 *                    "email" : "unexistent@test.com"
 *                    "password" : "Atestpw123"
 *                Successfully logged in:
 *                  value:
 *                    "email" : "avalojuanma@gmail.com"
 *                    "password" : "Atestpw123"
 *
 *       responses:
 *         200:
 *          description: OK
 *         401:
 *          description: Unauthorized
 *         404:
 *          description: Not Found
 *         422:
 *          description: Unprocessable Entity
 */
