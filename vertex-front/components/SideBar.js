"use client";
import { useState } from "react";

const SideBar = () => {
  // const [textList, setTextList] = useState("");
  // setTextList(["Article 1", "Article 2", "Article 3"]);
  const textList = ["Article 1", "Article 2", "Article 3"];
  return (
    <div>
      <ul>
        {textList.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
