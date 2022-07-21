import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React from "react";
import ItemCount from "../ItemCount/ItemCount";

import "./ItemDetail.scss";

const ItemDetail = ({ product }) => {
  const {
    name,
    price,
    description,
    features,
    stock,
    imgMob,
    imgTab,
    imgDesk,
    newProduct,
    boxQuan1,
    boxQuan2,
    boxQuan3,
    boxQuan4,
    boxQuan5,
    boxItem1,
    boxItem2,
    boxItem3,
    boxItem4,
    boxItem5,
  } = product;
  const arrival = newProduct && "NEW PRODUCT";

  return (
    <>
      <Card className="mx-auto mt-5 col-12 col-sm-8 col-md-10 card-detail">
        <div className="d-flex flex-column flex-md-row">
          <Card.Img src={imgMob} className="p-3 detail-img" />
          <Card.Body className="d-flex flex-column align-items-start justify-content-md-center">
            <Card.Subtitle className="card-new-txt">{arrival}</Card.Subtitle>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="mb-2 text-muted text-start">{description}</Card.Text>
            <Card.Subtitle className="mb-2">${price}</Card.Subtitle>
            <ItemCount initial={1} stock={stock} name={name} />
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
          <p className="detail-box-quant">{boxQuan1}</p>
          <p className="detail-box-item text-muted ">{boxItem1}</p>
          <p className="detail-box-quant">{boxQuan2}</p>
          <p className="detail-box-item text-muted ">{boxItem2}</p>
          <p className="detail-box-quant">{boxQuan3}</p>
          <p className="detail-box-item text-muted ">{boxItem3}</p>
          <p className="detail-box-quant">{boxQuan4}</p>
          <p className="detail-box-item text-muted ">{boxItem4}</p>
          <p className="detail-box-quant">{boxQuan5}</p>
          <p className="detail-box-item text-muted ">{boxItem5}</p>
        </div>
      </Card.Body>
    </>
  );
};

export default ItemDetail;
