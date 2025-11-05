// textNode.js

import { Handle, Position } from "reactflow";
import { useState, useEffect } from "react";
import BaseNode from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "Hello {{Sumeet}}");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    // Regex to find {{variable}} inside text
    const found = [...text.matchAll(/{{\s*([^}]+)\s*}}/g)].map((m) => m[1]);
    setVariables(found);
  }, [text]);

  return (
    <BaseNode title="Text" color="#3b82f6" >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        {variables.map((v, idx) => (
          <Handle
            key={idx}
            type="target"
            position={Position.Left}
            id={`${id}-${v}`}
            style={{ top: 20 + idx * 20 }}
          />
        ))}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            border: "1px solid #3b82f6",
            borderRadius: "5px",
            padding: "5px",
            width: "180px",
            resize: "none",
          }}
        />
      </div>
    </BaseNode>
  );
};

