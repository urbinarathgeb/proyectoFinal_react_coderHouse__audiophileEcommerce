//BOOTSTRAP
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

//COMPONENTES
import React, { useState } from "react";

//ESTILOS
import "./ItemCount.scss";

const ItemCount = ({ initial, stock, name }) => {
  const [count, setCount] = useState(initial);

  const increaseCount = () => {
    count >= 0 && count < stock && setCount(count + 1);
    alertMaxStock();
  };

  const decreaseCount = () => {
    count > 0 && count <= stock && setCount(count - 1);
  };

  const alertMaxStock = () => {
    count === stock && alert(`Lo sentimos, solo tenemos ${stock} ${name} en stock`);
  };

  const onAdd = () => {
    count > 0 && alert(`Agregaste correctamente ${count} ${name} al carrito`);
  };

  return (
    <div className="count-container d-flex justify-content-center mt-4 mx-auto gap-2">
      <ButtonGroup aria-label="ItemCount">
        <Button variant="info" className="btn-sm count-btn" onClick={decreaseCount}>
          -
        </Button>
        <div className="count">{count}</div>
        <Button variant="info" onClick={increaseCount} className="btn-sm count-btn">
          +
        </Button>
      </ButtonGroup>
      <Button className="count-cart-btn" onClick={onAdd}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default ItemCount;
