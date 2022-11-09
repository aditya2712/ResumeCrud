const router = require("express").Router();
const { get_country_list, get_uploaded_file } = require("../controllers/utils");

// API to return the country codes and names
router.get("/countries", get_country_list);
router.get("/get_file/:file_name", get_uploaded_file);

module.exports = router;
