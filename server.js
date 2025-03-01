require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();  // ✅ FIX: Define Express app
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// ✅ FIX: Ensure MongoDB URI is loaded from .env
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("❌ MONGO_URI is not defined! Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Sample API Route
app.get("/tasks", async (req, res) => {
  res.json([{ id: 1, task: "Example task", completed: false }]);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
