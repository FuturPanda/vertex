import { Content } from "./Content.js";
import { Box } from "./Box.js";
import Tiptap from "../components/Tiptap.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
    <Tiptap></Tiptap>
  </Box>
);
