const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: mongoose.Schema.Types.ObjectId // Who created
});
module.exports = mongoose.model('Task', TaskSchema);