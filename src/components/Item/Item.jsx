//BOOTSTRAP
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//REACT COMPONENTS
import { Link } from "react-router-dom";

//CUSTOM COMPONENTS
import ItemCount from "../ItemCount/ItemCount";

//STYLES
import "./Item.scss";

const Item = ({ item }) => {
  const { name, description, categoryImg, stock, id, catImgMob } = item;

  return (
    <Card className="mx-auto mt-5 col-12 col-sm-8 col-md-10 flex-md-row">
      <Card.Img src={catImgMob} className="category-img" />
      <Card.Body>
        <Card.Title className="mb-4">{name.toUpperCase()}</Card.Title>
        <Card.Text className="mb-4">{description}</Card.Text>
        <Link to={`/detalle/${id}`}>
          <Button className="card-btn">SEE PRODUCT</Button>
        </Link>
        {/*  <ItemCount initial={1} stock={stock} name={name} /> */}
      </Card.Body>
    </Card>
  );
};

export default Item;
