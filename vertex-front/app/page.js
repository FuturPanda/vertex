"use client";
import Image from "next/image";
import NavBar from "../components/NavBar.js";
import VirtualizedList from "../components/List.js";
import TipTap from "../components/TipTap.js";
import { useEffect, useState, useRef } from "react";
import SignIn from "@/app/signin/page.js";
import Stack from "@mui/material/Stack";
import { SessionProvider } from "next-auth/react";
import MarkdownEditor from "../components/Editor/MarkdownEditor.tsx";
import { MyEditor } from "../components/Editor/Editor.tsx";
import Card from "@/components/Card.js";

export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
    console.log(scrollTop);
  };

  useEffect(() => {
    const element = document.getElementById("today");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <>
      <Card id="yesterday" />
      <Card id="today" />
      <Card id="tommorow" />
    </>
  );
}
