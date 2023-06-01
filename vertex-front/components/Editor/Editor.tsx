import {
  BoldExtension,
  CalloutExtension,
  HeadingExtension,
  ItalicExtension,
} from "remirror/extensions";
import { EditorComponent, Remirror, useRemirror } from "@remirror/react";
import { Children } from "react";

const contentJson = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 1 },
      content: [{ type: "text", text: "Hello world" }],
    },
    {
      type: "paragraph",
      content: [
        { type: "text", text: "Hello " },
        { type: "text", marks: [{ type: "italic" }], text: "word" },
      ],
    },
  ],
};

function LoadButton({ initialContent }) {
  const { setContent } = useRemirrorContext();
  const handleClick = useCallback(
    () => console.log("Click " + initialContent),
    [setContent]
  );

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleClick}
    >
      Load
    </button>
  );
}

function SaveButton() {
  const { getJSON } = useHelpers();
  const handleClick = useCallback(
    () => alert(JSON.stringify(getJSON())),
    [getJSON]
  );
  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleClick}
    >
      Save
    </button>
  );
}

const Menu = () => <button onClick={() => alert("TBD")}>B</button>;

export const MyEditor = ({ initialContent }) => {
  const { manager, state } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new HeadingExtension(),
    ],
    content: initialContent,
  });

  return (
    <div className="remirror-theme">
      <Remirror manager={manager} initialContent={state}>
        {/* The text editor is placed above the menu to make the zIndex easier to manage for popups */}
        <Menu />
        <EditorComponent />
      </Remirror>
    </div>
  );
};
