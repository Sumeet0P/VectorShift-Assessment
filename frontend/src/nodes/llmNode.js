// llmNode.js

import { Handle, Position } from "reactflow";
import BaseNode from "./baseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode title="LLM" color="#3b82f6">
      <div>
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-prompt`}
          style={{ top: `${200 / 3}%` }}
        />
        <Handle type="source" position={Position.Right} id={`${id}-response`} />
      </div>
    </BaseNode>
  );
};
