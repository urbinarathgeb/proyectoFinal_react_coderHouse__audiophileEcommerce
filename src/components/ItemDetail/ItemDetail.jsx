//BOOTSTRAP
import Card from "react-bootstrap/Card";

//REACT COMPONENTS
import { useState } from "react";

//CUSTOM COMPONENTS
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";

//STYLES
import "./ItemDetail.scss";

const ItemDetail = ({ product }) => {
  const { name, price, description, features, stock, newProduct, image, includes } = product;
  const arrival = newProduct && "NEW PRODUCT";
  const { addCart } = useCartContext(); //UseContext + CartContext

  const onAdd = (count) => {
    addCart(product, count);
  };

  return (
    <>
      <Card className="mx-auto mt-5 col-12 col-sm-8 col-md-10 card-detail">
        <div className="d-flex flex-column flex-md-row">
          <Card.Img src={image?.mobile} className="p-3 detail-img" />

          <Card.Body className="d-flex flex-column align-items-start justify-content-md-center">
            <Card.Subtitle className="card-new-txt">{arrival}</Card.Subtitle>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="mb-2 text-muted text-start">{description}</Card.Text>
            <Card.Subtitle className="mb-2">${price}</Card.Subtitle>
            <ItemCount initial={1} stock={stock} name={name} onAdd={onAdd} />
          </Card.Body>
        </div>
      </Card>

      <Card.Body className="mx-auto mt-3 col-12 col-sm-8 col-md-10 detail-features">
        <h3 className="detail-title">FEATURES</h3>
        <p className="detail-feature-txt text-muted my-0">{features}</p>
      </Card.Body>

      <Card.Body className="mx-auto mb-5 col-12 col-sm-8 col-md-10 detail-box">
        <h3 className="detail-title">IN THE BOX</h3>

        <div className="detail-box-container">
          <p className="detail-box-quant">{includes[0]?.quantity}</p>
          <p className="detail-box-item text-muted ">{product.includes[0]?.item}</p>
          <p className="detail-box-quant">{product.includes[1]?.quantity}</p>
          <p className="detail-box-item text-muted ">{product.includes[1]?.item}</p>
          <p className="detail-box-quant">{product.includes[2]?.quantity}</p>
          <p className="detail-box-item text-muted ">{product.includes[2]?.item}</p>
          <p className="detail-box-quant">{product.includes[3]?.quantity}</p>
          <p className="detail-box-item text-muted ">{product.includes[3]?.item}</p>
          <p className="detail-box-quant">{product.includes[4]?.quantity}</p>
          <p className="detail-box-item text-muted ">{product.includes[4]?.item}</p>
        </div>
      </Card.Body>
    </>
  );
};

export default ItemDetail;
