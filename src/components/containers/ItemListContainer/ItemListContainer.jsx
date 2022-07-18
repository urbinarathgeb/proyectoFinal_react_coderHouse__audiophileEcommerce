//COMPONENTES
import React, { useState, useEffect } from "react";
import ItemList from "../../ItemList/ItemList";
import Loading from "../../Loading/Loading";

//ESTILOS
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  const getData = async () => {
    try {
      const resp = await fetch("data.json");
      const data = await resp.json();
      setItems(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return <div className="list-container">{loading ? <Loading /> : <ItemList items={items} />}</div>;
};

export default ItemListContainer;
