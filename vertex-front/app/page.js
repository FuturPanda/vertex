"use client";
import Image from "next/image";
import NavBar from "../components/NavBar.js";
import VirtualizedList from "../components/List.js";
import TipTap from "../components/TipTap";
import { useState } from "react";
import SignIn from "@/app/signin/page.js";

export default function Home() {
  const [userSession, setUserSession] = useState(null);
  const getUserSession = (usr) => {
    if (!usr) {
      setUserSession(null);
    }
  };
  return (
    <>
      <main className="bg-white h-full">
        <NavBar></NavBar>
        {userSession == null ? (
          <SignIn />
        ) : (
          <section className=" flex flex-row ">
            <VirtualizedList />
            <section className="w-full mx-10 ">
              <h1 className="text-3xl">Welcome to Vertex </h1>
              <TipTap />
            </section>
          </section>
        )}
      </main>
    </>
  );
}
