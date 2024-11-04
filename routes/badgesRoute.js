const express = require('express');

const badgesRouter = require('../controllers/badges');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Badges
 *   description: API for managing badges
 */

/**
 * @swagger
 * /badges:
 *   post:
 *     summary: Create a new badge
 *     tags: [Badges]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the badge
 *               description:
 *                 type: string
 *                 description: Description of the badge
 *               iconUrl:
 *                 type: string
 *                 description: URL of the badge icon
 *     responses:
 *       201:
 *         description: Badge created successfully
 */
router.post('/', badgesRouter.createBadge);

/**
 * @swagger
 * /badges:
 *   get:
 *     summary: Get all badges
 *     tags: [Badges]
 *     responses:
 *       200:
 *         description: List of all badges
 */
router.get('/', badgesRouter.getAllBadges);

/**
 * @swagger
 * /badges/{id}:
 *   patch:
 *     summary: Update a badge by ID
 *     tags: [Badges]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the badge to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated name of the badge
 *               description:
 *                 type: string
 *                 description: Updated description of the badge
 *               iconUrl:
 *                 type: string
 *                 description: Updated URL of the badge icon
 *     responses:
 *       200:
 *         description: Badge updated successfully
 */
router.patch('/:id', badgesRouter.updateBadge);

module.exports = router;
