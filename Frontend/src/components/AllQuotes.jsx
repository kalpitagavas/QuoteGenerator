import React, { useEffect, useState } from "react";
import axios from "axios";

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/quotes").then((res) => {
      setQuotes(res.data);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h2>All Quotes</h2>
      {quotes.map((q, i) => (
        <div key={i} style={styles.card}>
          <p style={styles.text}>"{q.text}"</p>
          <p style={styles.author}>— {q.author}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: { maxWidth: "600px", margin: "0 auto" },
  card: {
    background: "#f8f8f8",
    padding: "1rem",
    borderRadius: "8px",
    margin: "1rem 0",
  },
  text: { fontWeight: "bold" },
  author: { fontStyle: "italic" },
};

export default AllQuotes;
