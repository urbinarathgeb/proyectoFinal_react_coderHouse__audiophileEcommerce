//BOOTSTRAP
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";

//REACT COMPONENTS
import { useState } from "react";

//CUSTOM COMPONENTS
import iconCart from "../../assets/icon-cart.svg";
import { useCartContext } from "../../context/CartContext";

//STYLES
import "./CartWidget.scss";

function CartWidget() {
  const [show, setShow] = useState(false);
  const { cartList, removeItemCart, clearCart } = useCartContext(); //UseContext + CartContext
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="iconCart-container">
        <img src={iconCart} alt="Carrito tienda" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartList.map((prod) => (
            <ul key={prod.id}>
              <li>{prod.name}</li>
              <li>{prod.qty}</li>
              <li>{prod.price}</li>
              <Button onClick={() => removeItemCart(prod.id)}>Eliminar</Button>
            </ul>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup className="gap-2">
            <Button variant="primary" className="w-50 count-cart-btn">
              CHECKOUT
            </Button>
            <Button variant="primary" className="w-50 count-cart-btn" onClick={clearCart}>
              VACIAR CARRO
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartWidget;
