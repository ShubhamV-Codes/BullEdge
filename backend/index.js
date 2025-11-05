require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URL;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());  // replaces body-parser

// MongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ---------- AUTH ROUTES ----------
app.use("/auth", authRoutes);

// ---------- DATA ROUTES ----------

// Get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

// Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

// Add new order
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.json({ message: "✅ Order Saved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save order" });
  }
});

// Delete order
app.delete("/deleteOrder/:id", async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
