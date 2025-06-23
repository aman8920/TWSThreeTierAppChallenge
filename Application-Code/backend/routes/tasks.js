const Task = require("../models/task");
const express = require("express");
const router = express.Router();

// Create a task
router.post("/", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update task by ID
router.put("/:id", async (req, res) => {
    try {
        const [updated] = await Task.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedTask = await Task.findByPk(req.params.id);
            res.json(updatedTask);
        } else {
            res.status(404).json({ error: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete task by ID
router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Task.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({ message: "Task deleted" });
        } else {
            res.status(404).json({ error: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
