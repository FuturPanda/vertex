"use client";

import { Editor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = new Editor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        // class: "w-full mt-10",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
