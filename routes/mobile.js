const express = require("express");
const router = express.Router();

const { getAllMobileStatic, getAllMobile } = require("../controllers/mobile");

router.route("/mobilestatic").get(getAllMobileStatic);
router.route("/mobile").get(getAllMobile);

module.exports = router;
