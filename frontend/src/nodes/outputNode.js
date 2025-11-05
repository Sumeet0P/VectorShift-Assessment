// outputNode.js

import BaseNode from "./baseNode";

export function OutputNode() {
  return <BaseNode title="Output" color="#3b82f6" inputs={["input"]} outputs={["output"]}/>;
}