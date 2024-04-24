const express = require('express');
const router = express.Router();
const { getAllDetails, calculatePrice } = require('../Controller/controller');

/**
 * @swagger
 * /mealdeliveryapp/:
 *  get:
 *      description: Get all prices
 *      responses: 
 *          200: 
 *              description: Success
 */
router.get('/getAllDetails', getAllDetails);

/**
 * @swagger
 * /mealdeliveryapp/calculate-cost:
 *   post:
 *     summary: Calculation of delivery cost
 *     description: Calculate the total delivery cost based on various factors such as sector, org_id, total_distance, and item_type.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           
 *     responses:
 *       200:
 *         description: Successful response with the total delivery cost
 *         content:
 *           application/json:
 */
router.post('/calculateCost', calculatePrice);

module.exports = router;
