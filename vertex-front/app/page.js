import Image from "next/image";
import NavBar from "../components/NavBar.js";
import VirtualizedList from "../components/List.js";
import TipTap from "../components/TipTap";

export default function Home() {
  return (
    <>
      <main>
        <NavBar></NavBar>
        <section className=" flex flex-row ">
          <VirtualizedList />
          <section className="w-full mx-10 ">
            <h1 className="text-3xl">Welcome to Vertex </h1>
            <TipTap />
          </section>
        </section>
      </main>
    </>
  );
}
