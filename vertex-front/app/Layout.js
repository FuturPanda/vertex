// import { useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // const [userSession, setUserSession] = useState();
  // const getUserSession = (usr) => {
  //   if (!usr) {
  //     setUserSession(null);
  //   }
  // };
  return (
    <html lang="en">
      <body className="bg-white w-screen h-screen">{children}</body>
    </html>
  );
}
