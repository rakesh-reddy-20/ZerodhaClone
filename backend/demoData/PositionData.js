app.get("/position", async (req, res) => {
  let tempPosition = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  try {
    // Bulk insert the positions
    await PositionModel.insertMany(tempPosition);
    res.send("Positions saved successfully!");
  } catch (error) {
    console.error("Error saving positions:", error);
    res.status(500).send("Error saving positions.");
  }
});
