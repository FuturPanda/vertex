"use client";
import Image from "next/image";
import NavBar from "../components/NavBar.js";
import VirtualizedList from "../components/List.js";
import TipTap from "../components/TipTap";
import { useEffect, useState } from "react";
import SignIn from "@/app/signin/page.js";
import Stack from "@mui/material/Stack";
import { SessionProvider } from "next-auth/react";
import MarkdownEditor from "../components/Editor/MarkdownEditor.tsx";
import { MyEditor } from "../components/Editor/Editor.tsx";

export default function Home() {
  const [user, setUser] = useState("");
  const SAMPLE_DOC = {
    type: "doc",
    content: [
      {
        type: "paragraph",
        attrs: { dir: null, ignoreBidiAutoUpdate: null },
        content: [{ type: "text", text: "Loaded content" }],
      },
    ],
  };

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
  useEffect(() => {
    setUser(isLoggedIn());
    console.log("Loading " + SAMPLE_DOC);
  }, []);
  return (
    <>
      <main className="bg-white h-full">
        <section>
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
