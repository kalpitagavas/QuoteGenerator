// Backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const quoteRoutes = require("./routes/QuoteRouters");
const connectionDB = require("./config/db");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB connect
connectionDB();

// Routes
app.use("/quotes", quoteRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Random Quote Generator API");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
