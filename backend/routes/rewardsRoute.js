const express = require("express");
const {
  sendReward,
  getUserRewardHistoryByUserId,
  getTransactionDetailsById,
  deleteRewardById,
} = require("../controllers/rewardsController");
const router = express.Router();

router.post("/rewards", sendReward);
router.get("/rewards/:userId", getUserRewardHistoryByUserId);
router.get("/rewards/transaction/:id", getTransactionDetailsById);
router.delete("/rewards/transaction/:id", deleteRewardById);

module.exports = router;
