const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

// setupt middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  return res.json({ message: "welcome to stripe payment" });
});

app.post("/api/health", async (req, res, next) => {
  return res.json({ message: "checkout session" });
});

module.exports = app;
