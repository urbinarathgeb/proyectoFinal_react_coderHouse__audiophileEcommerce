//CUSTOM COMPONENTS
import Item from "../Item/Item";

//STYLES
import "./ItemList.scss";

const ItemList = ({ products }) => {
  return (
    <div className="itemList-container row justify-content-center gap-4 pt-4 pb-4">
      {products.map((prod) => (
        <Item product={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ItemList;
