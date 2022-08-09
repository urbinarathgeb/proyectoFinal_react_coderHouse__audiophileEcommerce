//BOOTSTRAP
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

//SWEET ALERT 2
import Swal from "sweetalert2";

//REACT COMPONENTS
import { useState } from "react";
import { Link } from "react-router-dom";

//STYLES
import "./ItemCount.scss";

const ItemCount = ({ initial, stock, name, onAdd }) => {
  const [activeState, setActiveState] = useState("addCart");
  const [count, setCount] = useState(initial);

  if (initial <= 0) {
    return <h6>Producto sin stock.</h6>;
  }
  const maxStockAlert = () => {
    count === stock &&
      Swal.fire({
        title: `Sorry!`,
        html: `<p>We only have <b>${stock} ${name}</b> in stock</p>`,
        icon: "error",
        confirmButtonColor: "#d87d4a",
        timer: 2000,
      });
  };

  const handleState = () => {
    onAdd(count);
    setActiveState("checkout");
  };

  const increaseCount = () => {
    count >= 0 && count < stock && setCount(count + 1);
    maxStockAlert();
  };

  const decreaseCount = () => {
    count > 0 && count <= stock && setCount(count - 1);
  };

  return (
    <>
      {activeState === "addCart" ? (
        <div className="count-container justify-content-center mt-4 gap-2">
          <ButtonGroup aria-label="ItemCount">
            <Button variant="info" className="btn-sm count-btn" onClick={decreaseCount}>
              -
            </Button>
            <div className="count">{count}</div>
            <Button variant="info" onClick={increaseCount} className="btn-sm count-btn">
              +
            </Button>
          </ButtonGroup>
          <Button className="count-cart-btn" onClick={handleState}>
            ADD TO CART
          </Button>
        </div>
      ) : (
        <div className="count-container justify-content-center mt-4 gap-2">
          <Link to="/cart">
            <Button className="count-cart-btn">FINALIZAR COMPRA</Button>
          </Link>
          <Link to="/">
            <Button className="count-cart-btn">SEGUIR COMPRANDO</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemCount;
