import {
  BoldExtension,
  CalloutExtension,
  HeadingExtension,
  ItalicExtension,
  AnnotationExtension,
  PlaceholderExtension,
  YjsExtension,
} from "remirror/extensions";
import "remirror/styles/all.css";

import React from "react";
import { WebrtcProvider } from "y-webrtc";
import * as Y from "yjs";
import {
  Remirror,
  ThemeProvider,
  useCommands,
  useActive,
  EditorComponent,
  useCurrentSelection,
  useHelpers,
  useRemirror,
} from "@remirror/react";

const ydoc = new Y.Doc();
// clients connected to the same room-name share document updates
const provider = new WebrtcProvider("remirror-yjs-demo", ydoc);
const SAMPLE_DOC = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      attrs: { dir: null, ignoreBidiAutoUpdate: null },
      content: [{ type: "text", text: "Loaded content" }],
    },
  ],
};

const extensions = () => [
  new AnnotationExtension(),
  new YjsExtension({ getProvider: () => provider }),
  new BoldExtension(),
  new ItalicExtension(),
  new HeadingExtension(),
];

const Menu = () => {
  const { toggleBold, focus } = useCommands();
  const active = useActive();
  const { removeAnnotations, addAnnotation, redrawAnnotations } = useCommands();
  const { getAnnotationsAt, selectionHasAnnotation } = useHelpers();
  const selection = useCurrentSelection();

  return (
    <>
      <button
        onClick={() => {
          toggleBold();
          focus();
        }}
        style={{ fontWeight: active.bold() ? "bold" : undefined }}
      >
        B
      </button>
      <button
        onClick={() => {
          addAnnotation({ id: `${Date.now()}` });
          focus();
        }}
        disabled={selection.empty}
      >
        Add annotation
      </button>
      <button
        onClick={() => {
          const annotations = getAnnotationsAt(selection.from);
          removeAnnotations(annotations.map(({ id }) => id));
          focus();
        }}
        disabled={!selectionHasAnnotation()}
      >
        Remove annotation(s)
      </button>
      <button
        onClick={() => {
          redrawAnnotations();
          focus();
        }}
      >
        Redraw annotation(s)
      </button>
    </>
  );
};

export const MyEditor = ({}) => {
  const { manager, state } = useRemirror({
    extensions,
    core: { excludeExtensions: ["history"] },
    content: SAMPLE_DOC,
  });

  return (
    <div className="remirror-theme">
      <Remirror
        manager={manager}
        initialContent={state}
        autoFocus
        autoRender="end"
      >
        <Menu />
      </Remirror>
    </div>
  );
};
