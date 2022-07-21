//COMPONENTES
import React, { useState, useEffect } from "react";
import ItemList from "../../ItemList/ItemList";
import Loading from "../../Loading/Loading";
import { useParams } from "react-router-dom";
import { getData } from "../../../helpers/getData";

//ESTILOS
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productCategory } = useParams();

  useEffect(() => {
    if (productCategory) {
      setTimeout(() => {
        getData()
          .then((data) => setItems(data.filter((item) => item.category === productCategory)))
          .finally(setLoading(false));
      }, 2000);
    } else {
      setTimeout(() => {
        getData()
          .then((data) => setItems(data))
          .finally(setLoading(false));
      }, 2000);
    }
  }, [productCategory]);

  return <div className="list-container">{loading ? <Loading /> : <ItemList items={items} />}</div>;
};

export default ItemListContainer;
