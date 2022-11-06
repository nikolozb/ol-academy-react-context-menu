import { useRef } from "react";

import ListItem from "../ListItem/ListItem";
import ContextMenu from "../ContextMenu/ContextMenu";

import "./List.styles.scss";

import useContextMenu from "../../hooks/useContextMenu";

const List = () => {
  const listRef = useRef();
  const menuRef = useRef();

  const { contextCords, contextText, showContextMenu, setShowContextMenu } =
    useContextMenu(listRef, menuRef);

  return (
    <div>
      <ul ref={listRef} className="list-container">
        {Array.apply(null, { length: 4 }).map((item, index) => {
          return <ListItem key={index} order={index + 1} />;
        })}
      </ul>
      {showContextMenu && (
        <ContextMenu
          menuRef={menuRef}
          text={contextText}
          cords={contextCords}
          setShowContextMenu={setShowContextMenu}
        />
      )}
    </div>
  );
};

export default List;
