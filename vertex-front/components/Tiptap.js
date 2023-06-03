"use client";

import { Editor, EditorContent, BubbleMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import Text from "@tiptap/extension-text";
import React from "react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { useState } from "react";

import DateStampComponent from "../controllers/Extension.js";

const ydoc = new Y.Doc();
const provider = new WebrtcProvider("tiptap-collaboration-extension", ydoc);

const Tiptap = () => {
  const editor = new Editor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      BubbleMenu,
      Collaboration.configure({
        document: ydoc,
      }),
      DateStampComponent,
      // Placeholder.configure({
      //   placeholder:
      //     "Write something … It’ll be shared with everyone else looking at this example.",
      // }),
    ],
    content: "<p>Hello World! 🌎️</p>",
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      // send the content to an API here
    },
  });

  const handleClick = () => {
    const json = editor.getJSON();
    console.log(json);
    const bool = json.content.map((item) =>
      item.type == "dateStampComponent" ? true : false
    );
    if (bool.includes(true)) {
      console.log("Gotcha");
    }
    console.log(bool);
    // for (let i = 0; i < 50; i++) {
    //   console.log(json.content);
    // }
  };

  useState(() => {
    editor.commands.insertContentAt(
      2,
      `
      <date-stamp-component/>
      `
    );
  }, []);
  return (
    <>
      <button onClick={handleClick}> Json</button>
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          strike
        </button>
      </BubbleMenu>
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
