const router = require("express").Router();
const { get_country_list } = require("../controllers/utils");

// API to return the country codes and names
router.get("/countries", get_country_list);

module.exports = router;
