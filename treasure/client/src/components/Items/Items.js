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
    <div className="row item-container">
      <div className="item col-lg-3">
        <Card className="">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
          <img
            width="100%"
            src="https://via.placeholder.com/160x200"
            alt="Card image cap"
          />
          <CardBody>
            <CardText>A NEW YORK CITY GRAPHIC T-SHIRT</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Items;
