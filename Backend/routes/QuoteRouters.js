const express = require("express");
const router = express.Router();
const Quote = require("../models/QuoteModel");

//  Get all quotes
router.get("/", async (req, res) => {
  const quotes = await Quote.find();
  res.status(200).json(quotes);
});

//  Add single quote
router.post("/", async (req, res) => {
  const { text, author } = req.body;
  const newQuote = new Quote({ text, author });
  await newQuote.save();
  res.status(201).json(newQuote);
});

//  Add bulk quotes — THIS IS THE IMPORTANT ONE
router.post("/bulk", async (req, res) => {
  try {
    const quotes = req.body;
    const result = await Quote.insertMany(quotes);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//  Get random quote
router.get("/random", async (req, res) => {
  const count = await Quote.countDocuments();
  const random = Math.floor(Math.random() * count);
  const randomQuote = await Quote.findOne().skip(random);
  res.status(200).json(randomQuote);
});

module.exports = router;
