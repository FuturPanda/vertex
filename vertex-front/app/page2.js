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

export default function Home() {
  const [user, setUser] = useState("");
  const tommorow = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  //   console.log(scrollPosition);
  // };
  function handleClick() {
    tommorow.current.scrollIntoView({ behavior: "smooth" });
  }

  const isLoggedIn = async () => {
    const user = await fetch("http://127.0.0.1:5000/user")
      .then((res) => res.json())
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("Type send failed", err);
      });
    console.log("User: " + user);
    return user;
  };
  // useEffect(() => {
  //   setUser(isLoggedIn());
  //   console.log("Loading " + SAMPLE_DOC);
  // }, []);

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll, { passive: true });
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <>
      <main className="bg-white h-full">
        <section>
          <div onScroll={(e) => console.log("scrolling!", e.target.scrollTop)}>
            <h3>Some huge div</h3>
          </div>
          <button onClick={handleClick}> Scroll </button>
          <MyEditor initialContent={SAMPLE_DOC} />
          <MyEditor initialContent={SAMPLE_DOC} />
          <MyEditor initialContent={SAMPLE_DOC} />
          <MyEditor initialContent={SAMPLE_DOC} />
          <MyEditor initialContent={SAMPLE_DOC} />
        </section>
      </main>

      {/* {!user ? (
        <SignIn />
      ) : (
        <main className="bg-white h-full">
          <section>
            <Stack
              spacing={2}
              direction="row"
              p={3}
              justifyContent="space-around"
              alignItems="center"
            >
              <VirtualizedList />
              <section>
                <h1 className="text-3xl">Welcome to Vertex </h1>
              </section>
            </Stack>
            <MarkdownEditor />
          </section>
        </main>
      )} */}
    </>
  );
}
