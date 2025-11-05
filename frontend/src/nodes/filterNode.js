// filterNode.js

import BaseNode from "./baseNode";

export function FilterNode() {
  return <BaseNode title="Filter" color="#3b82f6" inputs={["input"]} outputs={["output"]} />;
}