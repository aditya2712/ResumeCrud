const router = require("express").Router();
const utils = require("./utils");

router.use("/utils", utils);

// Health Check Route
router.get("/", (req, res) => {
  res.send("Health Check OK");
});

module.exports = router;
