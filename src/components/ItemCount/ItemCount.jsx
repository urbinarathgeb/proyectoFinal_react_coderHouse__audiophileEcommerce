import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { useState } from "react";

import "./ItemCount.css";

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);
  const product = "this.product";

  const increaseCount = () => {
    count >= 0 && count < stock && setCount(count + 1);
    alertMaxStock();
  };

  const decreaseCount = () => {
    count > 0 && count <= stock && setCount(count - 1);
  };

  const alertMaxStock = () => {
    count === stock && alert(`Lo sentimos, solo tenemos ${stock} ${product} en stock`);
  };

  const onAdd = () => {
    count > 0 && alert(`Agregaste correctamente ${count} ${product} al carrito`);
  };

  return (
    <>
      <ButtonGroup aria-label="ItemCount" className="mt-5">
        <Button variant="secondary" onClick={decreaseCount}>
          -
        </Button>
        <div className="count-container">{count}</div>
        <Button variant="secondary" onClick={increaseCount}>
          +
        </Button>
      </ButtonGroup>
      <Button variant="secondary" onClick={onAdd} className="ms-2 mt-5">
        Add to cart
      </Button>
    </>
  );
};

export default ItemCount;
