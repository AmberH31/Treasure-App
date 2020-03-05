import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Modalbox.css";

const Modalbox = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>More Infomation</ModalHeader>
        <ModalBody className="d-flex ">
          <img
            src="https://via.placeholder.com/130x150"
            alt="Card image cap"
            className="col-6"
          />
          <div className="col-6">
            <h1>
              {/* {props.name} */}
              Nikon EOS M50 EF-M 15-45mm
            </h1>
            Description: 17 out of 17 (100%) reviewers recommend this product.
            EF-M 15-45mm f/3.5-6.3 IS STM Lens Kit Black
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Add to Cart</Button>{" "}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Modalbox;
