const express = require("express");
const {
  sendReward,
  getUserRewardHistoryByUserId,
} = require("../controllers/rewardsController");
const router = express.Router();

router.post("/rewards", sendReward);
router.get("/rewards/:userId", getUserRewardHistoryByUserId);

module.exports = router;
