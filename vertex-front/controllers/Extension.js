import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Component from "./DateStampComponent";

export default Node.create({
  name: "dateStampComponent",
  group: "block",
  content: "inline",

  addAttributes() {
    return {
      count: {
        default: 0,
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
