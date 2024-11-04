const express = require('express');

const {
    createCourseOrClass,
    getCoursesOrClasses,
    getCourseOrClassById,
    updateCourseOrClassById,
    deleteCourseOrClassById
 } = require('../controllers/course');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: API for managing courses and classes
 */

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course or class
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               instructor_id:
 *                 type: string
 *                 description: ID of the instructor
 *               subject_id:
 *                 type: string
 *                 description: ID of the subject
 *               category:
 *                 type: string
 *                 description: ID of the category
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Skills related to the course
 *               price:
 *                 type: number
 *                 description: Price of the course
 *               discount:
 *                 type: number
 *                 description: Discount on the course
 *               level:
 *                 type: string
 *                 enum: [beginner, intermediate, advanced]
 *                 description: Level of the course
 *               duration:
 *                 type: string
 *                 description: Duration of the course
 *               language:
 *                 type: string
 *                 description: Language of instruction
 *               objective:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Objectives of the course
 *               prerequisites:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Prerequisites for the course
 *               content:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: IDs of content related to the course
 *               has_instructor:
 *                 type: boolean
 *                 description: Whether the course has an instructor
 *               is_verified:
 *                 type: boolean
 *                 description: Whether the course is verified
 *     responses:
 *       201:
 *         description: Course or class created successfully
 */
router.post('/', createCourseOrClass);

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses and classes
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: List of all courses and classes
 */
router.get('/', getCoursesOrClasses);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get a course or class by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the course or class
 *     responses:
 *       200:
 *         description: A single course or class object
 */
router.get('/:id', getCourseOrClassById);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update a course or class by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the course or class to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Course or class updated successfully
 */
router.put('/:id', updateCourseOrClassById);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course or class by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the course or class to delete
 *     responses:
 *       200:
 *         description: Course or class deleted successfully
 */
router.delete('/:id', deleteCourseOrClassById);

module.exports = router;
