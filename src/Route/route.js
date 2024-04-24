const express = require('express');
const router = express.Router();
const { getAllDetails, calculatePrice } = require('../Controller/controller');

/**
 * @swagger
 * /api/v1/fooddeliveryapp/:
 *  get:
 *      description: Get all prices
 *      responses: 
 *          200: 
 *              description: Success
 */
router.get('/getAllDetails', getAllDetails);

/**
 * @swagger
 * /api/v1/fooddeliveryapp/calculate-cost:
 *   post:
 *     summary: Calculate delivery cost
 *     description: Calculate the total delivery cost based on various factors such as zone, organization, distance, and item type.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeliveryRequest'
 *     responses:
 *       200:
 *         description: Successful response with the total delivery cost
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeliveryResponse'
 */
router.post('/calculateCost', calculatePrice);

module.exports = router;
