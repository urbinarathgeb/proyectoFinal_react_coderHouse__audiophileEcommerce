// REACT COMPONENTS
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// CUSTOM COMPONENTS
import ItemList from '../../components/ItemList/ItemList';
import Loading from '../../components/Loading/Loading';

// STYLES
import './ItemListContainer.scss';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productCategory } = useParams();
  const db = getFirestore();
  const queryCollection = collection(db, 'productos');

  useEffect(() => {
    if (productCategory) {
      const filterQueryCollection = query(
        queryCollection,
        where('category', '==', productCategory)
      );
      getDocs(filterQueryCollection)
        .then(resp =>
          setProducts(
            resp.docs.map(prod => ({
              id: prod.id,
              ...prod.data(),
            }))
          )
        )
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then(resp =>
          setProducts(
            resp.docs.map(prod => ({
              id: prod.id,
              ...prod.data(),
            }))
          )
        )
        .finally(() => setLoading(false));
    }
  }, [productCategory]);

  return (
    <div className='list-container'>
      {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
