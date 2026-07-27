const express = require("express");
const router = express.Router();

const { joinQueue, getQueue, updateQueueStatus, } = require("../controllers/queueController");
const { protect } = require("../middleware/authMiddleware");

router.post("/join", protect, joinQueue);
router.get("/", protect, getQueue);
router.put("/:id", protect, updateQueueStatus);
module.exports = router;