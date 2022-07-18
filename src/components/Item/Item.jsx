//BOOTSTRAP
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//COMPONENTES
import React from "react";
import ItemCount from "../ItemCount/ItemCount";

import "./Item.scss";

const Item = ({ item }) => {
  const { name, description, image, stock } = item;

  return (
    <Card className="col-9 col-md-11">
      <Card.Img
        src={image.mobile}
        srcSet={`${image.mobile} 320w,
                ${image.tablet} 650w,
                ${image.desktop} 1080w`}
      />
      <Card.Body>
        <Card.Title className="mb-4">{name.toUpperCase()}</Card.Title>
        <Card.Text className="mb-4">{description}</Card.Text>
        <Button className="card-btn">SEE PRODUCT</Button>
        <ItemCount initial={1} stock={stock} product={name} />
      </Card.Body>
    </Card>
  );
};

export default Item;
