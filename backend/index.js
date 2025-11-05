require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const cors = require("cors");

const {HoldingModel} = require("./model/HoldingModel");
const {PositionModel} = require("./model/PositionModel");
const {OrderModel} = require("./model/OrderModel");
 
const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(uri)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

app.get("/allHoldings",async (req,res)=>{
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions",async (req,res)=>{
    let allPositions = await PositionModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async(req,res)=>{
    let newOrder = new OrderModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode
    });
    newOrder.save();
    res.send("Order Saved");

});

// Delete an order (for testing)
app.delete("/deleteOrder/:id", async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ error: "Failed to delete order" });
  }
});



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(uri);
})
