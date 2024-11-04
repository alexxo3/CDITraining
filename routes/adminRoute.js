const express = require('express');
const {verifyAdminToken, authRole} = require('../middleware/auth');
const { adminSignup, adminLogin, updateAdminProfile, getAdminProfile, changeAdminPassword} = require('../controllers/admin');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: API for managing admin accounts
 */

/**
 * @swagger
 * /admin/signup:
 *   post:
 *     summary: Create a new admin account
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Admin's full name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Admin's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Admin's password
 *     responses:
 *       201:
 *         description: Admin account created successfully
 *       400:
 *         description: Bad request, validation errors
 */
router.post('/signup', adminSignup);

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Admin login
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Admin's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Admin's password
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized, invalid credentials
 */
router.post('/login', adminLogin);

/**
 * @swagger
 * /admin/profile:
 *   get:
 *     summary: Get admin profile
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin profile retrieved successfully
 *       403:
 *         description: Forbidden, admin privileges required
 */
router.get('/profile', verifyAdminToken, authRole('admin'), getAdminProfile);

/**
 * @swagger
 * /admin/update:
 *   put:
 *     summary: Update admin profile
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Admin's full name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Admin's email address
 *     responses:
 *       200:
 *         description: Admin profile updated successfully
 *       403:
 *         description: Forbidden, admin privileges required
 */
router.put('/update', verifyAdminToken, updateAdminProfile);

/**
 * @swagger
 * /admin/change-password:
 *   put:
 *     summary: Change admin password
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 format: password
 *                 description: Current password
 *               newPassword:
 *                 type: string
 *                 format: password
 *                 description: New password
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       403:
 *         description: Forbidden, admin privileges required
 */
router.put('/change-password', verifyAdminToken, changeAdminPassword);


module.exports = router;
