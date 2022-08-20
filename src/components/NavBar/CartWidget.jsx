// BOOTSTRAP
import Modal from 'react-bootstrap/Modal';

// REACT COMPONENTS
import { useState } from 'react';
import { Link } from 'react-router-dom';

// CUSTOM COMPONENTS
import iconCart from '../../assets/icon-cart.svg';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import CartTotal from '../CartTotal/CartTotal';

// STYLES
import './CartWidget.scss';

function CartWidget() {
  const [show, setShow] = useState(false);
  const { cartList, clearCart } = useCartContext(); // UseContext + CartContext
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let totalQty = 0;

  cartList.map(prod => (totalQty = totalQty + prod.qty));

  return (
    <>
      <div
        onClick={handleShow}
        className='iconCart-container'
      >
        <img
          src={iconCart}
          alt='Carrito tienda'
        />
        {totalQty > 0 && <h6 className='quantityCartItems'>{totalQty}</h6>}
      </div>

      {cartList.length === 0 ? (
        <Modal
          show={show}
          onHide={handleClose}
        >
          <Modal.Body className='emptyCart-container'>
            <h5>EMPTY CART</h5>
            <Link to='/store'>
              <button className='btn--orange'>CONTINUE SHOPPING</button>
            </Link>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal
          show={show}
          onHide={handleClose}
        >
          <Modal.Header>
            <Modal.Title>Cart: {totalQty}</Modal.Title>
            <p
              onClick={clearCart}
              className='cartWidget-txtBtn m-0'
            >
              Remove all
            </p>
          </Modal.Header>
          <Modal.Body>
            <CartItem />
          </Modal.Body>
          <Modal.Footer>
            <CartTotal />
            <Link to='/cart'>
              <button className='btn--orange'>CHECKOUT</button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default CartWidget;
