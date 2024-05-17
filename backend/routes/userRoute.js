const express = require("express");
const {
  createUser,
  updateUserById,
  getUserById,
} = require("../controllers/userController");
const router = express.Router();

router.post("/user", createUser);
router.put("/user/:id", updateUserById);
router.get("/user/:id", getUserById);

module.exports = router;
