import { NodeViewWrapper } from "@tiptap/react";
import React from "react";
import { useEffect } from "react";
const { DateTime } = require("luxon");

export default (props) => {
  const today = DateTime.now();
  const className = `date-stamp-${today.year}${today.month}${today.day}`;
  console.log(props);
  //
  return (
    <NodeViewWrapper className="date-stamp-component">
      <h1 id={className}>{today.toLocaleString()}</h1>
    </NodeViewWrapper>
  );
};
