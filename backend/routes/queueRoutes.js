const express = require("express");
const router = express.Router();

const { joinQueue, getQueue, updateQueueStatus, getQueueByToken, getDashboardStats } = require("../controllers/queueController");
const { protect } = require("../middleware/authMiddleware");

router.post("/join", protect, joinQueue);
router.get("/", protect, getQueue);
router.put("/:id", protect, updateQueueStatus);
router.get("/token/:token", protect, getQueueByToken);
router.get("/dashboard/stats", protect, getDashboardStats);
router.delete("/:id", protect, deleteQueue);
module.exports = router;