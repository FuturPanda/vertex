import React from "react";
import { MyEditor } from "./Editor/Editor";

const Card = ({ id }) => {
  return (
    <div id={id} className="card">
      <MyEditor />
    </div>
  );
};

export default Card;
