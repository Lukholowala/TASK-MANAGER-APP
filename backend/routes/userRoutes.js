const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {getUsers, getUserById, deleteUser} = require("../controllers/userContoller")

const router = express.Router();

//User Management Routes

router.get("/", protect, adminOnly, getUsers); //Get all users (Admin only)
router.get("/:id", protect, getUserById);

module.exports = router;