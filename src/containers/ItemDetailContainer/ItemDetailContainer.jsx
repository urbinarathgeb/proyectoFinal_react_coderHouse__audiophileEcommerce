//BOOTSTRAP
import Container from "react-bootstrap/Container";

//REACT COMPONENTS
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//CUSTOM COMPONENTS
import Loading from "../../components/Loading/Loading";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getData } from "../../helpers/getData";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    getData()
      .then((data) => setProduct(data.find((prod) => prod.id === Number(productId))))
      .finally(setLoading(false));
  }, [productId]);

  /*   const getFetch = async () => {
    try {
      const resp = await fetch("/data.json");
      const data = await resp.json();
      const item = await data.find((prod) => prod.id === Number(productId));
      setProduct(item);
      console.log(item);
      console.log(product);
      
      setProduct(data.find((prod) => prod.id === Number(productId)));
      
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }; 
  
  useEffect(() => {
    getFetch();
  }); */

  return (
    <Container fluid>{loading ? <Loading /> : <ItemDetail product={product} key={product.id} />}</Container>
  );
};

export default ItemDetailContainer;
