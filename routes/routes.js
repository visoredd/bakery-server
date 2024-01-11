const express = require("express");
const router = express.Router();
const Model = require("../models/model");

//Post Method
router.post("/order", async (req, res) => {
  const data = new Model(req.body);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/order", async (req, res) => {
  try {
    // Use cursor pagination to efficiently stream data
    const stream = Model.find().cursor();
    res.type("json");
    let firstChunk = true;

    stream.on("data", (doc) => {
      if (!firstChunk) {
        res.write("\n");
      }
      res.write(JSON.stringify(doc));
      firstChunk = false;
    });

    stream.on("end", () => {
      res.end();
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/order/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
