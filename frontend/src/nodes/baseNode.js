// BaseNode.js
import React from "react";
import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  color,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div
      style={{
        border: `2px solid ${color}`,
        borderRadius: 8,
        padding: 10,
        background: "white",
        minWidth: 160,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      <div style={{ fontWeight: "600", color }}>{title}</div>

      {/* Left-side input handles */}
      {inputs.map((id, idx) => (
        <Handle
          key={`in-${id}-${idx}`}
          type="target"
          position={Position.Left}
          id={`${title}-${id}-${idx}`} // ✅ make handle ID unique per node
          style={{ top: 35 + idx * 20 }}
        />
      ))}

      <div style={{ marginTop: 6 }}>{children}</div>

      {/* Right-side output handles */}
      {outputs.map((id, idx) => (
        <Handle
          key={`out-${id}-${idx}`}
          type="source"
          position={Position.Right}
          id={`${title}-${id}-${idx}`} // ✅ unique handle IDs
          style={{ top: 35 + idx * 20 }}
        />
      ))}
    </div>
  );
}
