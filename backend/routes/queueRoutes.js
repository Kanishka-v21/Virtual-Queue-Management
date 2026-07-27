const express = require("express");
const router = express.Router();

const { joinQueue, getQueue } = require("../controllers/queueController");
const { protect } = require("../middleware/authMiddleware");

router.post("/join", protect, joinQueue);
router.get("/", protect, getQueue);

module.exports = router;