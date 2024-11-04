const express = require('express');
const { createInstructor, getInstructors, getInstructor, updateInstructor, deleteInstructor } = require('../controllers/instructor');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Instructors
 *   description: API for managing instructors
 */

/**
 * @swagger
 * /instructors:
 *   post:
 *     summary: Create a new instructor
 *     tags: [Instructors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               uuid:
 *                 type: string
 *                 description: Unique identifier for the instructor
 *               upload_id:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: IDs of the identity documents uploaded
 *               category:
 *                 type: string
 *                 description: Category ID the instructor belongs to
 *               education:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: IDs of the education records
 *               skills:
 *                 type: string
 *                 description: Skills of the instructor
 *               work_experience:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: IDs of the work experience records
 *               certifications:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: List of certifications
 *               social_links:
 *                 type: object
 *                 properties:
 *                   linkedIn:
 *                     type: string
 *                   facebook:
 *                     type: string
 *                   github:
 *                     type: string
 *                   x:
 *                     type: string
 *                   instagram:
 *                     type: string
 *                   whatsapp:
 *                     type: string
 *               courses_taught:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: IDs of courses taught by the instructor
 *               badges:
 *                 type: string
 *                 description: Badge ID
 *               profile:
 *                 type: string
 *                 description: Profile ID
 *               role:
 *                 type: string
 *                 default: "instructor"
 *     responses:
 *       201:
 *         description: Instructor created successfully
 */
router.post('/', createInstructor);

/**
 * @swagger
 * /instructors:
 *   get:
 *     summary: Get all instructors
 *     tags: [Instructors]
 *     responses:
 *       200:
 *         description: List of all instructors
 */
router.get('/', getInstructors);

/**
 * @swagger
 * /instructors/{id}:
 *   get:
 *     summary: Get an instructor by ID
 *     tags: [Instructors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the instructor
 *     responses:
 *       200:
 *         description: A single instructor object
 */
router.get('/:id', getInstructor);

/**
 * @swagger
 * /instructors/{id}:
 *   put:
 *     summary: Update an instructor by ID
 *     tags: [Instructors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the instructor to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Instructor updated successfully
 */
router.put('/:id', updateInstructor);

/**
 * @swagger
 * /instructors/{id}:
 *   delete:
 *     summary: Delete an instructor by ID
 *     tags: [Instructors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the instructor to delete
 *     responses:
 *       200:
 *         description: Instructor deleted successfully
 */
router.delete('/:id', deleteInstructor);

module.exports = router;
