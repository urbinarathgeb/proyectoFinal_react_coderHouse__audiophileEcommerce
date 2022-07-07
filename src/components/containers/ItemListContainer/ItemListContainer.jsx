import ItemCount from "../../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <div>{greeting}</div>
      <ItemCount initial={1} stock={5} />
    </div>
  );
};

export default ItemListContainer;
