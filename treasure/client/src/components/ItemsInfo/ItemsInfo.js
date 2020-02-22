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
    <div className=" info row d-flex justify-content-center">
      <Gobackbtn />
      <Card className="card">
        <img
          width="100%"
          src="https://via.placeholder.com/130x150"
          alt="Card image cap"
        />
        <CardBody className="">
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
