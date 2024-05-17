const User = require("../model/user");
const RewardHistory = require("../model/rewards");

// sending reward to user to other user
const sendReward = async (req, res) => {
  const { givenBy, givenTo, points } = req.body;

  try {
    const userFrom = await User.findById(givenBy);
    const userTo = await User.findById(givenTo);

    if (!userFrom || !userTo) {
      return res.status(404).json({ message: "User not found" });
    }

    if (userFrom.p5Balance < points) {
      return res.status(400).json({ message: "Insufficient P5 balance" });
    }

    userFrom.p5Balance -= points;
    userTo.rewardsBalance += points;

    const reward = new RewardHistory({ givenBy, givenTo, points });
    await reward.save();

    await userFrom.save();
    await userTo.save();

    res.json(reward);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// check the rewards by user id
const getUserRewardHistoryByUserId = async (req, res) => {
  try {
    const rewards = await RewardHistory.find({ givenTo: req.params.userId })
      .populate("givenBy", "name")
      .populate("givenTo", "name");

    const user = await User.findById(req.params.userId);

    res.status(200).json({
      user: {
        name: user.name,
        p5Balance: user.p5Balance,
        rewardsBalance: user.rewardsBalance,
      },
      rewards,
    });
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
};

module.exports = {
  sendReward,
  getUserRewardHistoryByUserId,
};
