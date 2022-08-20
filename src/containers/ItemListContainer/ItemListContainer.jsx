// FIRESTORE
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

// REACT COMPONENTS
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// CUSTOM COMPONENTS
import ItemList from '../../components/ItemList/ItemList';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';

// STYLES
import './ItemListContainer.scss';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, 'products');
    const filterQueryCollection = productCategory
      ? query(queryCollection, where('category', '==', productCategory))
      : queryCollection;
    getDocs(filterQueryCollection)
      .then(resp => {
        setProducts(
          resp.docs.map(prod => ({
            id: prod.id,
            ...prod.data(),
          }))
        );
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [productCategory]);

  return (
    <section className='list-container gap-4'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ItemList products={products} />
          <Footer />
        </>
      )}
    </section>
  );
};

export default ItemListContainer;
