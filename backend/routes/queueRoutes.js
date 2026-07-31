const express = require("express");
const router = express.Router();

const { joinQueue, getQueue, updateQueueStatus, getQueueByToken, getDashboardStats, deleteQueue, getQueuePosition, serveNextCustomer, getCurrentCustomer, getWaitingQueue, getCompletedQueue, skipCustomer, recallCustomer, resetQueue, getMyQueues } = require("../controllers/queueController");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

router.post("/join", protect, joinQueue);
router.get("/", protect, getQueue);
router.get("/my", protect, getMyQueues);
router.get("/token/:token", protect, getQueueByToken);
router.put("/:id", protect, adminOnly, updateQueueStatus);
router.delete("/:id", protect, adminOnly, deleteQueue);
router.get("/dashboard/stats", protect, adminOnly, getDashboardStats);
router.get("/position/:id", protect, getQueuePosition);
router.patch("/serve-next", protect, adminOnly, serveNextCustomer);
router.get("/current", protect, getCurrentCustomer);
router.get("/waiting", protect, getWaitingQueue);
router.get("/completed", protect, adminOnly, getCompletedQueue);
router.patch("/skip", protect, adminOnly, skipCustomer);
router.patch("/recall/:id",protect, adminOnly, recallCustomer);

router.delete("/reset",protect, adminOnly, resetQueue);

router.get("/test", (req, res) => {
    res.json({
        message: "Queue routes working"
    });
});
module.exports = router;