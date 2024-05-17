const express = require("express");
const {
  sendReward,
  getUserRewardHistoryByUserId,
  getTransactionDetailsById,
} = require("../controllers/rewardsController");
const router = express.Router();

router.post("/rewards", sendReward);
router.get("/rewards/:userId", getUserRewardHistoryByUserId);
router.get("/rewards/transaction/:id", getTransactionDetailsById);

module.exports = router;
