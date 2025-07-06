import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);

  const fetchRandom = async () => {
    try {
      const res = await axios.get("http://localhost:8000/quotes/random");
      setQuote(res.data);
    } catch (err) {
      console.log("Failed to fetch quote:", err.message);
    }
  };

  useEffect(() => {
    fetchRandom(); 
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>🎯 Random Quote Generator</h2>

      {quote ? (
        <div>
          <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
            "{quote.text}"
          </p>
          <p>— {quote.author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={fetchRandom} style={{ marginTop: "1rem" }}>
        🔁 New Quote
      </button>
    </div>
  );
};

export default RandomQuote;
