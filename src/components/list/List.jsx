import React from "react";
import "./List.styles.scss";

import ListItem from "../list-item/ListItem";
import ContextMenu from "../context-menu/ContextMenu";

import { useRef } from "react";

import useContextMenu from "../../custom-hooks/useContextMenu";

const List = () => {
  const listRef = useRef();

  const { contextCords, contextText, showContextMenu } =
    useContextMenu(listRef);

  return (
    <div>
      <ul ref={listRef} className="list-container">
        {Array.apply(null, { length: 4 }).map((item, index) => {
          return <ListItem key={index} order={index + 1} />;
        })}
      </ul>
      {showContextMenu && (
        <ContextMenu text={contextText} cords={contextCords} />
      )}
    </div>
  );
};

export default List;
