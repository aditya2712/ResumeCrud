const router = require("express").Router();
const utils = require("./utils");
const profile = require("./profile");

router.use("/utils", utils);
router.use("/profile", profile);

// Health Check Route
router.get("/", (req, res) => {
  res.send("Health Check OK");
});

module.exports = router;
