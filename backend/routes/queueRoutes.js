const express = require("express");
const router = express.Router();

const { joinQueue, getQueue, updateQueueStatus, getQueueByToken, getDashboardStats, deleteQueue } = require("../controllers/queueController");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

router.post("/join", protect, joinQueue);
router.get("/", protect, getQueue);
router.get("/token/:token", protect, getQueueByToken);
router.put("/:id", protect, adminOnly, updateQueueStatus);
router.delete("/:id", protect, adminOnly, deleteQueue);
router.get("/dashboard/stats", protect, adminOnly, getDashboardStats);

module.exports = router;