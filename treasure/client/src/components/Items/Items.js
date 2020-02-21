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
import "./Items.css";

const Items = props => {
  return (
    <Card className="card d-flex col-md-3">
      <img
        width="100%"
        src="https://via.placeholder.com/130x150"
        alt="Card image cap"
      />
      <CardBody className="d-flex">
        <CardText>A NEW YORK CITY GRAPHIC T-SHIRT</CardText>
        <CardLink>$20</CardLink>
        <CardLink href="#" className="1justify-content-right">
          Add to Cart
        </CardLink>
      </CardBody>
    </Card>
  );
};

export default Items;
