const User = require("../model/user");

const createUser = async (req, res, next) => {
  const { name } = req.body;
  try {
    const user = new User({ name });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const updateUserById = async (req, res, next) => {
  const { name } = req.body;
  const id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(id, { name }, { new: true });
    res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    res.status(500).json({
      message: "error updating user server error",
      error: err.message,
    });
  }
};
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};
module.exports = {
  createUser,
  updateUserById,
  getUserById,
};
