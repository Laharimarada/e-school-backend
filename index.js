const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./Routers/Router");
const cors = require("cors");
const { configDotenv } = require("dotenv");
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    origin: "*",
  })
);

// Routes
app.use("/api/v1/students", studentRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
