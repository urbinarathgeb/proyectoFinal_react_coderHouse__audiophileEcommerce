//BOOTSTRAP
import Container from "react-bootstrap/Container";

//FIREBASE
import { doc, getDoc, getFirestore } from "firebase/firestore";

//REACT COMPONENTS
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//CUSTOM COMPONENTS
import Loading from "../../components/Loading/Loading";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, "productos", productId);
    getDoc(queryProduct)
      .then((resp) => {
        setProduct({ id: resp.id, ...resp.data() });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <Container fluid>{loading ? <Loading /> : <ItemDetail product={product} key={product.id} />}</Container>
  );
};

export default ItemDetailContainer;
