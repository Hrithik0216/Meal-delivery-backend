const queries = require('../Model/model');
const db = require('../../Database/database')

const getAllDetails = async (req, res) => {
    try {
        const price = await db.query(queries.allDetails)
        res.status(201).json(price.rows)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

const calculatePrice = async (req, res) => {
    let finalAmount = 0;
    const { sector, org_id, total_distance, item_type } = req.body;
    try {
        const result = await db.query(queries.priceDetails, [org_id, sector])
        if (result.rows.length > 0) {
            let { base_distance_in_km, base_price } = result.rows[0];
            let fixedAmount = parseFloat(base_price);
            let totalDistance = total_distance;
            let baseDistance = parseInt(base_distance_in_km);

            if (totalDistance <= baseDistance) {
                finalAmount = fixedAmount;
            } else {
                const extraDistance = totalDistance - baseDistance;
                if (item_type === 'perishable') {
                    finalAmount = fixedAmount + extraDistance * 1.5;
                } else {
                    finalAmount = fixedAmount + extraDistance * 1;
                }
            }

            finalAmount = Math.round(finalAmount * 100) / 100; // Round to 2 decimal places

            res.status(200).json({ Amount: finalAmount });
        } else {
            res.status(404).json({ message: "Price details not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = { getAllDetails, calculatePrice };