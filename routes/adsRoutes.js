const express = require('express');
const { createAds, getAllAds, deleteAds } = require('../controllers/ads');
const { verifyAdminToken, authRole } = require('../middleware/auth');
const upload = require('../middleware/upload');


const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ads
 *   description: API for managing advertisements
 */

/**
 * @swagger
 * /ads:
 *   post:
 *     summary: Create a new advertisement
 *     tags: [Ads]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                   description: Images for the ad (maximum 2)
 *               expire_date:
 *                 type: string
 *                 format: date-time
 *                 description: Expiration date for the ad
 *     responses:
 *       201:
 *         description: Ad created successfully
 *       403:
 *         description: Forbidden, admin privileges required
 */
router.post('/', verifyAdminToken, authRole('admin'), upload.array('images', 2), createAds);

/**
 * @swagger
 * /ads:
 *   get:
 *     summary: Retrieve all advertisements
 *     tags: [Ads]
 *     responses:
 *       200:
 *         description: List of all advertisements
 */
router.get('/', getAllAds); // All users can access

/**
 * @swagger
 * /ads/{id}:
 *   delete:
 *     summary: Delete an advertisement by ID
 *     tags: [Ads]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the advertisement to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ad deleted successfully
 *       403:
 *         description: Forbidden, admin privileges required
 */
router.delete('/:id', verifyAdminToken, authRole('admin'), deleteAds);

module.exports = router;
