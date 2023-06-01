import { useActive, useCommands } from "@remirror/react";

export const Menu = () => {
  const { toggleBold, focus } = useCommands();
  const active = useActive();

  return (
    <button
      onClick={() => {
        toggleBold();
        focus();
      }}
      style={{ fontWeight: active.bold() ? "bold" : undefined }}
    >
      B
    </button>
  );
};
