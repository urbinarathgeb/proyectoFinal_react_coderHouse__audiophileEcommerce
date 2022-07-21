import Container from "react-bootstrap/Container";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { getData } from "../../../helpers/getData";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getData()
        .then((data) => setProduct(data.find((prod) => prod.id === Number(productId))))
        .catch((err) => console.log(err))
        .finally(setLoading(false));
    }, 1200);
  }, [productId]);

  return (
    <Container fluid>{loading ? <Loading /> : <ItemDetail product={product} key={product.id} />}</Container>
  );
};

export default ItemDetailContainer;
