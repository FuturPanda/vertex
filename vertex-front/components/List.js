"use client";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function List() {
  const articles = ["spam1", "spam2", "La Polka Du Sud"];
  return (
    <section className=" w-20">
      {articles.map((item, index) => (
        <ListItemButton component="a" key={item + index} href="#simple-list">
          <ListItemText primary={item} key={item + index} />
        </ListItemButton>
      ))}
    </section>
  );
}
