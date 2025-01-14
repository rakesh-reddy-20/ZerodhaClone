require("dotenv").config(); // requiring .env file
const express = require("express"); // requiring express
const app = express();
const mongoose = require("mongoose"); // requireing database
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");

// connection URL
const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

// Home page
app.get("/", (req, res) => {
  res.send("home page");
});

// Getting all holdings
app.get("/allHoldings", async (req, res) => {
  let Holdings = await HoldingModel.find({});
  res.json(Holdings);
});

// Getting all Position
app.get("/allPositions", async (req, res) => {
  let Positions = await PositionModel.find({});
  res.json(Positions);
});

// Getting all orders
app.get("/allOrders", async (req, res) => {
  let Orders = await OrderModel.find({});
  res.json(Orders);
});

// Adding new order to db
app.post("/newOrder", async (req, res) => {
  try {
    if (!req.body.name || !req.body.qty || !req.body.price || !req.body.mode) {
      return res.status(400).send("Invalid input");
    }

    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();

    let HoldingData = await HoldingModel.find({ name: req.body.name });
    let stockQty = req.body.qty;
    if (!HoldingData.length) {
      return res.status(404).send("Holding data not found");
    }
    let newHolding = new HoldingModel({
      name: HoldingData[0].name,
      qty: stockQty,
      avg: HoldingData[0].avg,
      price: HoldingData[0].price,
      net: HoldingData[0].net,
      day: HoldingData[0].day,
      isLoss: HoldingData[0].isLoss,
    });
    await newHolding.save();

    res.send("Order and holding saved!!!");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
});

// default port
app.listen(PORT, () => {
  console.log("hii there!!!");
  mongoose.connect(uri); // database connection
  console.log("Database connected!!");
});
