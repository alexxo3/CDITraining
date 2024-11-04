const express = require('express');

const { createCategory, getCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/category');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: API for managing categories
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the category
 *               description:
 *                 type: string
 *                 description: Description of the category
 *     responses:
 *       201:
 *         description: Category created successfully
 */
router.post('/', createCategory);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of all categories
 */
router.get('/', getCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the category
 *     responses:
 *       200:
 *         description: A single category object
 */
router.get('/:id', getCategory);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the category to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated name of the category
 *               description:
 *                 type: string
 *                 description: Updated description of the category
 *     responses:
 *       200:
 *         description: Category updated successfully
 */
router.put('/:id', updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the category to delete
 *     responses:
 *       200:
 *         description: Category deleted successfully
 */
router.delete('/:id', deleteCategory);

module.exports = router;
