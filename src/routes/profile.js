const router = require("express").Router();
const multer = require("multer");

const {
  create_profile,
  get_profile_list,
  delete_profile,
} = require("../controllers/profile");
const upload = multer({ dest: "./uploads/" });

router.post("/create", upload.single("resume"), create_profile);
router.get("/list", get_profile_list);
router.delete("/delete/:id", delete_profile);

module.exports = router;
