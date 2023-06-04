import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { v4 as uuidv4 } from "uuid";

import Component from "./DateStampComponent";

export default Node.create({
  name: "dateStampComponent",
  group: "block",
  content: "inline",

  addAttributes() {
    return {
      id: {
        default: () => uuidv4(),
        parseHTML: (element) => element.getAttribute("id"),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "date-stamp-component",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["date-stamp-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
