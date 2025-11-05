// submit.js


import React from "react";

export const SubmitButton = ({ nodes, edges }) => {

  const handleSubmit = async () => {
    console.log("Sending to backend:", { nodes, edges });

    try {
      const res = await fetch("https://victorshift-assessment-backend.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }), // must be arrays
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Backend error: ${res.status} ${errText}`);
      }

      const data = await res.json();
      alert(`✅ Nodes: ${data.num_nodes}\n✅ Edges: ${data.num_edges}\n✅ DAG: ${data.is_dag}`);
    } catch (error) {
      console.error("❌ Submit Error:", error);
      alert(error.message);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

