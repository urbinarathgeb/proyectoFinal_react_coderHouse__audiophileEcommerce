//COMPONENTES
import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="row d-flex gap-4 justify-content-center">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
