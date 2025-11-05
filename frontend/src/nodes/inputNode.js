// inputNode.js

import BaseNode from "./baseNode";

export function InputNode() {
  return <BaseNode title="Input" color="#3b82f6" inputs={["input"]} outputs={["output"]} />;
}