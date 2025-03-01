const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
