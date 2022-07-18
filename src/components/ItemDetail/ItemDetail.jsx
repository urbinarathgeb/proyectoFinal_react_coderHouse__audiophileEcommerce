import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const { name, price, description, features, image, stock } = product;
  return (

        <Card className="mx-auto">
            <Card.Img src={image.mobile}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2">${price}</Card.Subtitle>
                <Card.Text className="mb-2 text-muted">{features}</Card.Text>
                <ItemCount initial={1} stock={stock} product={name} />
            </Card.Body>
        </Card>
   
  );
};

export default ItemDetail;
