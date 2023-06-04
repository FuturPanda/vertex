"use client";
import SignIn from "@/app/signin/page.js";
import { SessionProvider } from "next-auth/react";
import Card from "@/components/Card.js";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";

export default function Home() {
  // scroll to position
  // const handleClickScroll = () => {
  //   const element = document.getElementById("section-1");
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // Get the scrolling position
  // const [scrollTop, setScrollTop] = useState(0);

  // const handleScroll = (event) => {
  //   setScrollTop(event.currentTarget.scrollTop);
  //   console.log(scrollTop);
  // };

  // To Scroll
  // useEffect(() => {
  //   const element = document.getElementById("today");
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth", block: "end" });
  //   }
  // }, []);

  return (
    <>
      <NavBar />
      <div className="cardwrapper">
        <Card />
      </div>
    </>
  );
}
