// FIRESTORE
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';

// REACT-HOOK-FORM
import { useForm } from 'react-hook-form';

// HELPERS - SWEETALERT
import { orderAlert } from '../../helpers/sweetAlertFunctions';

// CUSTOM COMPONENTS
import { useCartContext } from '../../context/CartContext';

// STYLES
import './OrderForm.scss';

const OrderForm = () => {
  const { cartList, clearCart, totalPrice } = useCartContext(); // UseContext + CartContext
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const order = {};
  const db = getFirestore();

  /*
   * It creates an object with the buyer's information and the items in the cart
   */
  const createBuyerObject = inputData => {
    order.buyer = {
      name: inputData.name,
      phone: inputData.phoneNumber,
      email: inputData.email,
    };
    order.items = cartList.map(prod => {
      return {
        id: prod.id,
        title: prod.name,
        price: prod.price,
        quantity: prod.qty,
      };
    });
    order.total = totalPrice();
  };

  /**
   * It gets all the products in the cart, then it gets all the products in the database, and then it
   * updates the stock of each product in the database with the quantity of the product in the cart
   */
  const updateDataWithOrder = async () => {
    const queryCollectionStock = collection(db, 'products');
    const batch = writeBatch(db);
    const queryUpdateStock = query(
      queryCollectionStock,
      where(
        documentId(),
        'in',
        cartList.map(prod => prod.id)
      )
    );
    await getDocs(queryUpdateStock).then(resp =>
      resp.docs.forEach(res =>
        batch.update(res.ref, {
          stock:
            res.data().stock - cartList.find(item => item.id === res.id).qty,
        })
      )
    );
    batch.commit();
  };

  const generateOrder = inputData => {
    if (cartList.length > 0) {
      const queryOrders = collection(db, 'orders');
      createBuyerObject(inputData);
      updateDataWithOrder();
      addDoc(queryOrders, order)
        .then(resp => orderAlert(resp, inputData))
        .finally(() => clearCart());
    }
  };

  return (
    <form
      className='form-container my-4 p-3 my-lg-0'
      onSubmit={handleSubmit(generateOrder)}
    >
      <h3 className='text-start'>CKECKOUT</h3>

      <label htmlFor='name'>Name</label>
      <input
        type='text'
        className='form-control my-2'
        id='name'
        placeholder='Enter your name'
        {...register('name', {
          required: true,
        })}
      />
      {errors.name?.type === 'required' && (
        <p className='alert alert-danger'>Name is required</p>
      )}

      <label htmlFor='phoneNumber'>Phone number</label>
      <input
        type='tel'
        className='form-control my-2'
        placeholder='Enter your phone number'
        id='phoneNumber'
        {...register('phoneNumber', {
          required: true,
          minLength: 9,
        })}
      />
      {errors.phoneNumber?.type === 'required' && (
        <p className='alert alert-danger'>Phone number is required</p>
      )}
      {errors.phoneNumber?.type === 'minLength' && (
        <p className='alert alert-danger'>Enter at least 9 numbers</p>
      )}

      <label htmlFor='email'>Email address</label>
      <input
        type='email'
        className='form-control my-2'
        placeholder='Enter email'
        id='email'
        {...register('email', {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
        })}
      />
      {errors.email?.type === 'required' && (
        <p className='alert alert-danger'>Email address is required</p>
      )}
      {errors.email?.type === 'pattern' && (
        <p className='alert alert-danger'>Wrong email format</p>
      )}

      <label htmlFor='reEmail'>Re-enter yout email address</label>
      <input
        type='email'
        id='reEmail'
        className='form-control my-2'
        placeholder='Re-enter email'
        autoComplete='off'
        {...register('reEmail', {
          required: true,
          validate: value => value === watch('email'),
        })}
      />
      {errors.reEmail?.type === 'required' && (
        <p className='alert alert-danger'>Email address is required</p>
      )}
      {errors.reEmail?.type === 'validate' && (
        <p className='alert alert-danger'>The entered emails do not match</p>
      )}

      <button
        className='btn--orange w-50 mx-auto'
        type='submit'
      >
        GENERATE ORDER
      </button>
    </form>
  );
};

export default OrderForm;
