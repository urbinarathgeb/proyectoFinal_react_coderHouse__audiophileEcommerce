//BOOTSTRAP
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//COMPONENTES
import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
  const { name, description, image, stock } = item;

  return (
    <Card className="col-5 flex-row">
      <Card.Img src={image} className="w-50" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">SEE PRODUCT</Button>
        <ItemCount initial={1} stock={stock} product={name} />
      </Card.Body>
    </Card>
  );
};

export default Item;
