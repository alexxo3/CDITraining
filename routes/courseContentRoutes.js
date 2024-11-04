const express = require('express');
const { createCourseContent, getCourseContents, getCourseContent, updateCourseContent, deleteCourseContent } = require('../controllers/courseContent');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CourseContents
 *   description: API for managing course contents
 */

/**
 * @swagger
 * /course-contents:
 *   post:
 *     summary: Create a new course content
 *     tags: [CourseContents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the course content
 *               description:
 *                 type: string
 *                 description: Description of the course content
 *               courseId:
 *                 type: string
 *                 description: ID of the associated course
 *     responses:
 *       201:
 *         description: Course content created successfully
 */
router.post('/', createCourseContent);

/**
 * @swagger
 * /course-contents:
 *   get:
 *     summary: Get all course contents
 *     tags: [CourseContents]
 *     responses:
 *       200:
 *         description: List of all course contents
 */
router.get('/', getCourseContents);

/**
 * @swagger
 * /course-contents/{id}:
 *   get:
 *     summary: Get a course content by ID
 *     tags: [CourseContents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the course content
 *     responses:
 *       200:
 *         description: A single course content object
 */
router.get('/:id', getCourseContent);

/**
 * @swagger
 * /course-contents/{id}:
 *   put:
 *     summary: Update a course content by ID
 *     tags: [CourseContents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the course content to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Updated title of the course content
 *               description:
 *                 type: string
 *                 description: Updated description of the course content
 *               courseId:
 *                 type: string
 *                 description: ID of the associated course
 *     responses:
 *       200:
 *         description: Course content updated successfully
 */
router.put('/:id', updateCourseContent);

/**
 * @swagger
 * /course-contents/{id}:
 *   delete:
 *     summary: Delete a course content by ID
 *     tags: [CourseContents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the course content to delete
 *     responses:
 *       200:
 *         description: Course content deleted successfully
 */
router.delete('/:id', deleteCourseContent);


module.exports = router;
