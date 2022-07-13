//BOOTSTRAP
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

//COMPONENTES
import React, { useState } from "react";

//ESTILOS
import "./ItemCount.css";

const ItemCount = ({ initial, stock, product }) => {
  const [count, setCount] = useState(initial);

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
    <div className="itemCount-container mt-3 gap-2">
      <ButtonGroup aria-label="ItemCount">
        <Button variant="secondary" onClick={decreaseCount}>
          -
        </Button>
        <div className="count-container">{count}</div>
        <Button variant="secondary" onClick={increaseCount}>
          +
        </Button>
      </ButtonGroup>
      <Button variant="secondary" onClick={onAdd}>
        Add to cart
      </Button>
    </div>
  );
};

export default ItemCount;
