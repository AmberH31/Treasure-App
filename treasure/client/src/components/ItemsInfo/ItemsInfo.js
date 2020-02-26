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
import "./ItemsInfo.css";
import Gobackbtn from "../Gobackbtn";

const ItemsInfo = props => {
  return (
    <div className=" info d-flex justify-content-center">
      <Card className="card row">
        <Gobackbtn className="col-1" />
        <img
          className="image col-7"
          src="https://via.placeholder.com/130x150"
          alt="Card image cap"
        />
        <CardBody className="col-4">
          <CardText>A NEW YORK CITY GRAPHIC T-SHIRT</CardText>
          <CardLink>$20</CardLink>
          <CardLink href="#" className="1justify-content-right">
            Add to Cart
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemsInfo;
