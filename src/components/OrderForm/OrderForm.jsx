// BOOTSTRAP
import Button from 'react-bootstrap/Button';

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

// SWEET ALERT 2
import Swal from 'sweetalert2';

// CUSTOM COMPONENTS
import { useCartContext } from '../../context/CartContext';

function OrderForm() {
  const { cartList, totalPrice, clearCart } = useCartContext(); // UseContext + CartContext
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const order = {};
  const db = getFirestore();

  const orderAlert = (resp, inputData) => {
    Swal.fire({
      title: `Thank you, ${inputData.name}. We’re processing your order!`,
      html: `<p>The code of your order is <b>${resp.id}</b></p>`,
      icon: 'success',
      iconColor: '#d87d4a',
      confirmButtonColor: '#d87d4a',
    });
  };

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

  const updateDataWithOrder = async () => {
    const queryCollectionStock = collection(db, 'productos');
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
    console.log('base datos actualiada');
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
    <form onSubmit={handleSubmit(generateOrder)}>
      <input
        type='text'
        className='form-control my-2'
        name='name'
        placeholder='Enter your name'
        {...register('name', {
          required: true,
        })}
      />
      {errors.name?.type === 'required' && (
        <p className='alert alert-danger'>Nombre requerido</p>
      )}

      <input
        type='tel'
        className='form-control my-2'
        placeholder='Enter your phone number'
        name='phoneNumber'
        {...register('phoneNumber', {
          required: true,
          minLength: 9,
        })}
      />
      {errors.phoneNumber?.type === 'required' && (
        <p className='alert alert-danger'>Teléfono requerido</p>
      )}
      {errors.phoneNumber?.type === 'minLength' && (
        <p className='alert alert-danger'>Mínimo 9 números</p>
      )}

      <input
        type='email'
        className='form-control my-2'
        placeholder='Enter email'
        name='email'
        id='email'
        {...register('email', {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
        })}
      />
      {errors.email?.type === 'required' && (
        <p className='alert alert-danger'>Email requerido</p>
      )}
      {errors.email?.type === 'pattern' && (
        <p className='alert alert-danger'>Formato email incorrecto</p>
      )}

      <input
        type='email'
        name='reEmail'
        className='form-control my-2'
        placeholder='Re-enter email'
        autoComplete='off'
        {...register('reEmail', {
          required: true,
          validate: value => value === watch('email'),
        })}
      />
      {errors.reEmail?.type === 'required' && (
        <p className='alert alert-danger'>Email requerido</p>
      )}
      {errors.reEmail?.type === 'validate' && (
        <p className='alert alert-danger'>Los emails no coinciden</p>
      )}

      <Button
        className='principalBtn w-50'
        type='submit'
      >
        GENERATE ORDER
      </Button>
    </form>
  );
}

export default OrderForm;
