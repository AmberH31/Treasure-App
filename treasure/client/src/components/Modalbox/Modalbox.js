import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Modalbox.css";
import ProductImage from "./../Items/ViewProductImage"
const Modalbox = ({ product }) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(product)
  return (
    <div>
      <Button onClick={toggle}></Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>More Infomation</ModalHeader>
        <ModalBody className="d-flex ">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", width: "100%" }}>
            <ProductImage itemID={product['_id']} />
            <div style={{ gridColumn: '2/3' }}>
              <h1>
                {product.name}
              </h1>
              Description: {product.description}
            </div>
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
