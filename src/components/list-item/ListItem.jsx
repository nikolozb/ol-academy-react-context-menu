import React from "react";
import "./ListItem.styles.scss";

const ListItem = ({ order }) => {
  return <div className="list-item">List Item {order}</div>;
};

export default ListItem;
