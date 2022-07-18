//BOOTSTRAP
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//COMPONENTES
import React, { useState } from "react";
import iconCart from "../../assets/icon-cart.svg";

//ESTILOS
import "./CartWidget.scss";

function CartWidget() {
  const [show, setShow] = useState(false);
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
        <Modal.Body>Productos!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="w-100">
            CHECKOUT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartWidget;
