const express = require('express');
const Task = require('../models/Task');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to protect routes
function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token) return res.sendStatus(403);

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        res.sendStatus(403);
    }
}

// Get all tasks (admin only)
router.get('/', authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') return res.sendStatus(403);
    const tasks = await Task.find();
    res.json(tasks);
});

// Create task
router.post('/', authMiddleware, async (req, res) => {
    const task = new Task({ ...req.body, userId: req.user.id });
    await task.save();
    res.send('Task created');
});


// User's own tasks
router.get('/my', authMiddleware, async (req, res) => {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
});

module.exports = router;
