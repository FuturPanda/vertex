"use client";
import styles from "./navbar.module.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import NavbarButtonLogin from "./NavbarButtonLogin";
import { MarkdownToolbar } from "@remirror/react";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <nav className={styles.navbar}>
      <Stack
        spacing={2}
        direction="row"
        p={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <h1>VERTEX</h1>
        <div>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <NavbarButtonLogin />
              </Stack>
            </div>
            {session ? <Avatar src={session.user.image}></Avatar> : ""}
          </Stack>
        </div>
      </Stack>
    </nav>
  );
}
