const express = require('express');
const { createStudent, getStudents, getStudent, updateStudent, deleteStudent } = require('../controllers/student');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: API for managing students
 */

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               uuid:
 *                 type: string
 *                 description: Unique identifier for the student
 *               courses:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: IDs of courses the student is enrolled in
 *               certification:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: List of certifications
 *               profile:
 *                 type: string
 *                 description: Profile ID
 *               role:
 *                 type: string
 *                 default: "student"
 *     responses:
 *       201:
 *         description: Student created successfully
 */
router.post('/', createStudent);

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of all students
 */
router.get('/', getStudents);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the student
 *     responses:
 *       200:
 *         description: A single student object
 */
router.get('/:id', getStudent);

/**
 * @swagger
 * /students/{id}:
 *   patch:
 *     summary: Update a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the student to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Student updated successfully
 */
router.patch('/:id', updateStudent);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the student to delete
 *     responses:
 *       200:
 *         description: Student deleted successfully
 */
router.delete('/:id', deleteStudent);


module.exports = router;
