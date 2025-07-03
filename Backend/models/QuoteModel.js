const mongoose = require("mongoose");

const QuoteSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const QuoteModel = mongoose.model("Quote", QuoteSchema);

module.exports = QuoteModel;
