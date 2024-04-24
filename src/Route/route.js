const express = require('express');
const router = express.Router();
const { getAllDetails, calculatePrice } = require('../Controller/controller');

/**
 * @swagger
 * /mealdeliveryapp/getAllDetails:
 *   get:
 *     summary: Get all prices
 *     description: Get all prices from the database.
 *     responses:
 *       200:
 *         description: Successful response with all prices.
 *       500:
 *         description: Internal server error.
 */
router.get('/getAllDetails', getAllDetails);

/**
 * @swagger
 * /mealdeliveryapp/calculateCost:
 *   post:
 *     summary: Calculate delivery cost
 *     description: Calculate the total delivery cost based on sector, org_id, total_distance, and item_type.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeliveryRequest'
 *     responses:
 *       200:
 *         description: Successful response with the total delivery cost.
 *       400:
 *         description: Invalid request body.
 */
router.post('/calculateCost', calculatePrice);

module.exports = router;
