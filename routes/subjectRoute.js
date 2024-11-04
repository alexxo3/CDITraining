const express = require('express');
const { createSubject, getSubjects, getSubject, updateSubject, deleteSubject } = require('../controllers/subjects');

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Subjects
 *   description: API for managing subjects
 */

/**
 * @swagger
 * /subjects:
 *   post:
 *     summary: Create a new subject
 *     tags: [Subjects]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - picture
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the subject
 *               picture:
 *                 type: string
 *                 description: URL of the subject picture
 *               description:
 *                 type: string
 *                 description: Description of the subject
 *     responses:
 *       201:
 *         description: Subject created successfully
 *       400:
 *         description: Bad request, invalid input
 */

router.post('/', createSubject);

/**
 * @swagger
 * /subjects:
 *   get:
 *     summary: Get all subjects
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: A list of subjects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   picture:
 *                     type: string
 *                   description:
 *                     type: string
 */
router.get('/', getSubjects);

/**
 * @swagger
 * /subjects/{id}:
 *   get:
 *     summary: Get a subject by ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the subject to retrieve
 *     responses:
 *       200:
 *         description: Subject retrieved successfully
 *         content:
 *          application/json:
 *           schema:
 *            type: object
 *            properties:
 *             id:
 *              type: string
 *             name:
 *              type: string
 *             picture:
 *              type: string
 *       404:
 *         description: Subject not found
 */
router.get('/:id', getSubject);

/**
 * @swagger
 * /subjects/{id}:
 *   put:
 *     summary: Update a subject by ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the subject to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated name of the subject
 *               picture:
 *                 type: string
 *                 description: Updated URL of the subject picture
 *               description:
 *                 type: string
 *                 description: Updated description of the subject
 *     responses:
 *       200:
 *         description: Subject updated successfully
 *       404:
 *         description: Subject not found
 */
router.put('/:id', updateSubject);

/**
 * @swagger
 * /subjects/{id}:
 *   delete:
 *     summary: Delete a subject by ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the subject to delete
 *     responses:
 *       204:
 *         description: Subject deleted successfully
 *       404:
 *         description: Subject not found
 */
router.delete('/:id', deleteSubject);

module.exports = router;
