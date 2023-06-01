"use client";
import Image from "next/image";
import NavBar from "../components/NavBar.js";
import VirtualizedList from "../components/List.js";
import TipTap from "../components/TipTap";
import { useEffect, useState } from "react";
import SignIn from "@/app/signin/page.js";
import Stack from "@mui/material/Stack";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  const [user, setUser] = useState("");
  const isLoggedIn = async () => {
    const user = await fetch("http://127.0.0.1:5000/user")
      .then((res) => res.json())
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("Type send failed", err);
      });
    console.log(user);
    return user;
  };
  useEffect(() => {
    setUser(isLoggedIn());
  }, []);
  return (
    <>
      {!user ? (
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
                <TipTap />
              </section>
            </Stack>
          </section>
        </main>
      )}
    </>
  );
}
