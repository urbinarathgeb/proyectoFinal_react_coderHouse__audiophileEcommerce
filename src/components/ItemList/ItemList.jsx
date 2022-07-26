//CUSTOM COMPONENTS
import Item from "../Item/Item";

//STYLES
import "./ItemList.scss";

const ItemList = ({ items }) => {
  return (
    <div className="itemList-container row justify-content-center gap-4 pt-4 pb-4">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
