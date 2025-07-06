import React, { useState } from "react";
import axios from "axios";

const AddQuoteForm = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/quotes", { text, author });
      alert("Quote added!");
      setText("");
      setAuthor("");
    } catch (err) {
      alert("Error adding quote.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Add Quote</h2>
      <input
        placeholder="Quote"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        style={styles.input}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Add
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default AddQuoteForm;
