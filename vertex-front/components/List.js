"use client";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function VirtualizedList() {
  return (
    <section className=" w-20">
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Spam" />
      </ListItemButton>
    </section>
  );
}
