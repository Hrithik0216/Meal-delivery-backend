const allDetails = "SELECT * FROM priceData";
const priceDetails = "SELECT base_distance_in_km, base_price FROM priceData WHERE org_id = $1 AND sector = $2";

module.exports = { allDetails, priceDetails };
