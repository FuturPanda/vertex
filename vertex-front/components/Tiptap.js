"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Editor } from "@tiptap/core";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

const Tiptap = () => {
  const editor = new Editor({
    extensions: [Document, Paragraph, Text],
    content: "<p>Example Text</p>",
    autofocus: true,
    editable: true,
    injectCSS: false,
  });
  return <EditorContent editor={editor} />;
};

export default Tiptap;
