// REACT COMPONENTS
import { Link } from 'react-router-dom';

// CUSTOM COMPONENTS
import CartTotal from '../../components/CartTotal/CartTotal';
import { useCartContext } from '../../context/CartContext';
import OrderForm from '../../components/OrderForm/OrderForm';
import CartItem from '../../components/CartItem/CartItem';
import Footer from '../../components/Footer/Footer';

// STYLES
import './CartContainer.scss';

const CartContainer = () => {
  const { cartList, clearCart } = useCartContext(); // UseContext + CartContext

  if (cartList.length === 0) {
    return (
      <section className='emptyCart-container'>
        <h5>EMPTY CART</h5>
        <Link to='/store'>
          <button className='btn--orange'>CONTINUE SHOPPING</button>
        </Link>
      </section>
    );
  }
  return (
    <>
      <section className='cart-container m-4'>
        <div className='cart-summary p-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>SUMMARY</h3>
            <p
              onClick={clearCart}
              className='cartWidget-txtBtn m-0'
            >
              Remove all
            </p>
          </div>
          <CartItem />
          <CartTotal />
        </div>
        <div className='cart-form'>
          <OrderForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CartContainer;
