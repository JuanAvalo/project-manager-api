/**
 * @swagger
 * components:
 *  schemas:
 *    Project:
 *       type: object
 *       properties:
 *          id:
 *           type: integer
 *          name:
 *            type: string
 *            description: the project's name
 *          description:
 *            type: string
 *            description: the project's description
 *          status:
 *            type: integer
 *            description: the project's state
 *
 *       required:
 *         - name
 *         - description
 *         - status
 *
 *       example:
 *        name: Main Proyect
 *        description: "Do all the important things"
 *        status: 1
 *
 *    BodyProjectCreate:
 *       type: object
 *       properties:
 *          name:
 *            type: string
 *            description: the project's name
 *          description:
 *            type: string
 *            description: the project's description
 *          managers:
 *            type: array
 *            description: array of managers id to add
 *          assignees:
 *            type: array
 *            description: array of assignees id to add
 *          status:
 *            type: integer
 *            description: the project's state
 *
 *       required:
 *         - name
 *         - description
 *         - managers
 *         - assignees
 *         - status
 *
 *       example:
 *        name: Main Proyect
 *        description: "Do all the important things"
 *        managers: [1]
 *        assignees: [2,3]
 *        status: 1
 *
 *    BodyProjectEdit:
 *       type: object
 *       properties:
 *          name:
 *            type: string
 *            description: the new project's name
 *          description:
 *            type: string
 *            description: the new project's description
 *          status:
 *            type: integer
 *            description: the new project's state *
 *
 *       example:
 *        name: Main Proyect
 *        description: "A new project description"
 *        status: 2 *
 *
 *    BodyProjectAddMembers:
 *       type: object
 *       properties:
 *          managers:
 *            type: array
 *            description: array of users to add as managers
 *          assignees:
 *            type: array
 *            description: array of users to add as assignees
 *
 *       example:
 *        managers: [1,2]
 *        assignees: [3]
 *
 *
 *    BodyProjectRemoveMembers:
 *       type: object
 *       properties:
 *          members:
 *            type: array
 *            description: array of members to remove from the project
 *
 *       required:
 *         - members
 *       example:
 *        members: [2]
 */
/** ================= CREATE =============================
 * @swagger
 * /projects:
 *  post:
 *      summary: Create a new project
 *      tags: [Project]
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/BodyProjectCreate'
 *      responses:
 *        201:
 *           description: new project created
 *        401:
 *           description: you must authenticate
 *        404:
 *           description: manager or assignee does not exists
 *        422:
 *           description: validation error
 */
/** ================= EDIT =============================
 * @swagger
 * /projects/{id}/edit:
 *  post:
 *      summary: Edit details of an existing project
 *      tags: [Project]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/BodyProjectEdit'
 *      responses:
 *        200:
 *           description: project edited successfully
 *        401:
 *           description: you must authenticate
 *        404:
 *           description: project does not exists
 *        422:
 *           description: validation error
 */

/** ================= ADD MEMBERS =============================
 * @swagger
 * /projects/{id}/members:
 *  post:
 *      summary: Add members to a project, as manager o assignee
 *      tags: [Project]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/BodyProjectAddMembers'
 *      responses:
 *        200:
 *           description: added members to project
 *        401:
 *           description: you must authenticate
 *        404:
 *           description: projec, manager, or assignee does not exists
 *        422:
 *           description: validation error
 */
/** ================= SEARCH PROJECT =============================
 * @swagger
 * /projects/{id}:
 *  get:
 *      summary: Find a project by ID
 *      tags: [Project]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *      responses:
 *        200:
 *           description: listed projects
 *        401:
 *           description: you must authenticate
 *        404:
 *           description: project not found
 */
/** ================= LIST PROJECTS =============================
 * @swagger
 * /projects:
 *  get:
 *      summary: List all projects (filter by name [optional])
 *      tags: [Project]
 *      parameters:
 *        - in: query
 *          name: name
 *          schema:
 *              type: string
 *              required: false
 *      responses:
 *        200:
 *           description: listed projects
 *        401:
 *           description: you must authenticate
 *        404:
 *           description: projects not found
 */

/** ================= REMOVE MEMBERS =============================
 * @swagger
 * /projects/{id}/members:
 *  delete:
 *      summary: Remove members from a project
 *      tags: [Project]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/BodyProjectRemoveMembers'
 *      responses:
 *        200:
 *           description: removed members from project
 *        401:
 *           description: you must authenticate
 *        404:
 *           description: project does not exists
 *        422:
 *           description: validation error
 */
/** ================= REMOVE PROJECT =============================
 * @swagger
 * /projects/{id}:
 *  delete:
 *      summary: Remove members from a project
 *      tags: [Project]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *      responses:
 *        200:
 *           description: removed project successfully
 *        401:
 *           description: you must authenticate
 *        404:
 *           description: project does not exists
 *        422:
 *           description: validation error
 */
