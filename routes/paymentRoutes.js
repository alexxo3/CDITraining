const express = require('express');
const { createPayment, getAllPayments, getPaymentById, updatePayment } = require('../controllers/payment');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: API for managing payments
 */

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a new payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 description: The amount for the payment
 *                 example: 100.0
 *               method:
 *                 type: string
 *                 description: Payment method
 *                 example: "credit card"
 *               status:
 *                 type: string
 *                 description: Payment status
 *                 example: "pending"
 *     responses:
 *       201:
 *         description: Payment created successfully
 */
router.post('/', createPayment);

/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Get all payments
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: List of all payments
 */
router.get('/', getAllPayments);

/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the payment
 *     responses:
 *       200:
 *         description: A single payment object
 */
router.get('/:id', getPaymentById);

/**
 * @swagger
 * /payments/{id}:
 *   patch:
 *     summary: Update a payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the payment to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 description: Updated payment amount
 *                 example: 150.0
 *               status:
 *                 type: string
 *                 description: Updated payment status
 *                 example: "completed"
 *     responses:
 *       200:
 *         description: Payment updated successfully
 */
router.patch('/:id', updatePayment);

module.exports = router;
