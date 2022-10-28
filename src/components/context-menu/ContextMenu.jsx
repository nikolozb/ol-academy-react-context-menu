import React from "react";
import "./ContextMenu.styles.scss";

const ContextMenu = ({ text, cords }) => {
  return (
    <div
      style={{ top: `${cords.y}px`, left: `${cords.x}px` }}
      className="context-menu"
    >
      {text}
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </div>
  );
};

export default ContextMenu;
