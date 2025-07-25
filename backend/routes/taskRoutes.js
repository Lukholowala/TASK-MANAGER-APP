const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getDashboardData, getUserDashboardData, getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskCheckList } = require("../controllers/taskController");

const router = express.Router();

//Task Management Routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks);  //Get all tasks (Admin: all, User: assigned)
router.get("/:id", protect, getTaskById); //Get all tasks by Id
router.post("/", protect, adminOnly, createTask); //Create a task (Admin Only)
router.put("/:id", protect, updateTask); //Update task details
router.delete("/:id", protect, adminOnly, deleteTask); // Delete a task (Admin only)
router.put("/:id/status", protect, updateTaskStatus); //Update task status
router.put("/:id/todo", protect, updateTaskCheckList); //Update task checklist

module.exports = router;