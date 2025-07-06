import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Random", "All", "Add"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        margin: "1.5rem 0",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{
            padding: "0.75rem 1.5rem",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            borderRadius: "5px",
            backgroundColor: activeTab === tab ? "#333" : "#ccc",
            color: activeTab === tab ? "#fff" : "#000",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
