const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  p5Balance: {
    type: Number,
    default: 100,
  },
  rewardsBalance: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", UserSchema);
