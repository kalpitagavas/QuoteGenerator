🌟 Random Quote Generator – Full Stack App
Welcome to the Random Quote Generator – a full-stack project built as part of my 5-week challenge to design and deploy one full-stack app every week using React and MongoDB.

This repository contains the backend built with Node.js and Express, and is fully connected to a React frontend featuring three main tabs:

🧭 Frontend Overview
The UI is clean, functional, and tab-based. Here's what it includes:

🔹 All Quotes Tab
→ Displays a list of all quotes fetched from the database.

🔹 Random Quote Tab
→ Displays one random quote on each visit or refresh.

🔹 Add Quote Tab
→ Allows users to submit their own quotes, which are instantly added to the database.

The frontend is fully integrated with the backend via REST API.

Live Demo (if available): [Add your deployed site link here]

⚙️ Backend Tech Stack
Node.js

Express.js

MongoDB with Mongoose

RESTful API (GET, POST, Bulk Insert, Random)

🌐 API Endpoints
GET /quotes
Fetch all quotes.

GET /quotes/random
Fetch one random quote.

POST /quotes
Add a new quote.

QuoteGenerator/
├── config/          # MongoDB connection
├── models/          # Mongoose schema
├── routes/          # Express route handlers
├── server.js        # Entry point
├── .env             # Environment variables

📌 Features Summary
 Full REST API for quotes

 Add and retrieve quotes from MongoDB

 Frontend tabs:

All Quotes

Random Quote

Add Quote

 Real-time data updates

 Full stack integration (React + Express + MongoDB)

🔗 GitHub Repositories
Project : https://github.com/kalpitagavas/QuoteGenerator.git

Live Demo (optional): [Netlify/Vercel/Render/etc.]

