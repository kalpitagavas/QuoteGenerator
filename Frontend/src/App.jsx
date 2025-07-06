import React, { useState } from "react";
import Tabs from "./components/Tabs";
import RandomQuote from "./components/RandomQuote";
import AllQuotes from "./components/AllQuotes";
import AddQuoteForm from "./components/AddQuoteForm";

function App() {
  const [activeTab, setActiveTab] = useState("Random");

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
        📚 Quote Generator
      </h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Random" && <RandomQuote />}
      {activeTab === "All" && <AllQuotes />}
      {activeTab === "Add" && <AddQuoteForm />}
    </div>
  );
}

export default App;
