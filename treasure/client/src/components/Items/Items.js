import React from "react";
import {
  Card,
  //   CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import Modalbox from "../Modalbox/Modalbox";
import "./Items.css";
import ProductImage from "./ViewProductImage";
const Item = ({ product }) => {
  return (
    <Card className="card d-flex col-md-3">
      <ProductImage itemID={product['_id']} />
      <CardBody className="d-flex">
        <CardText>{product.name}</CardText>
        <CardLink>${product.price}</CardLink>
        <CardLink href="#" className="d-flex justify-content-right">
          <div className="addtoCart">
            <Modalbox product={product} />
          </div>
        </CardLink>
      </CardBody>
    </Card>
  );
};

export default Item;
