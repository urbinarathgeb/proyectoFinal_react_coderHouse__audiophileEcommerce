import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getFetch();
    }, 2000);
  }, []);

  const getFetch = async () => {
    try {
      const resp = await fetch("data.json");
      const data = await resp.json();
      setProduct(data.find((item) => item.id === 3));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row">
      <h4 className="mt-5">Item Detail Container</h4>
      {loading ? <Loading /> : <ItemDetail product={product} key={product.id} />}
    </div>
  )
};

export default ItemDetailContainer;
