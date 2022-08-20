// FIREBASE
import { doc, getDoc, getFirestore } from 'firebase/firestore';

// REACT COMPONENTS
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// CUSTOM COMPONENTS
import Loading from '../../components/Loading/Loading';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import AboutUs from '../../components/AboutUs/AboutUs';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, 'products', productId);
    getDoc(queryProduct)
      .then(resp => {
        setProduct({ id: resp.id, ...resp.data() });
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [productId]);

  return (
    <section className='d-flex flex-column justify-content-center align-items-center'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ItemDetail
            product={product}
            key={product.id}
          />
          <Gallery product={product} />
          <AboutUs />
          <Footer />
        </>
      )}
    </section>
  );
};

export default ItemDetailContainer;
