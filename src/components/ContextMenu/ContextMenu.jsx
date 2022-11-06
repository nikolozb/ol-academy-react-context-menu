import "./ContextMenu.styles.scss";

const ContextMenu = ({ text, cords, setShowContextMenu, menuRef }) => {
  return (
    <div
      style={{ top: `${cords.y}px`, left: `${cords.x}px` }}
      className="context-menu"
      ref={menuRef}
      onContextMenu={(e) => e.preventDefault()}
    >
      {text}
      <button onClick={() => setShowContextMenu(false)}>1</button>
      <button onClick={() => setShowContextMenu(false)}>2</button>
      <button onClick={() => setShowContextMenu(false)}>3</button>
      <button onClick={() => setShowContextMenu(false)}>4</button>
    </div>
  );
};

export default ContextMenu;
