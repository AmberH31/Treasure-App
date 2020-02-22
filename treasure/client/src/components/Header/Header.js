import React from "react";

import "../Cart/Cart.css";

const Header = props => {
  //reduce((prev,curr)=>{})
  const itemCount = props.products.reduce((quantity, product) => {
    // it's possible that product.quantity is a string.
    // for e.g. product.quantity = "5"
    // a prefix + will transform string into number
    return quantity + Number(product.quantity);
  }, 0);

  return (
    <header className="container">
      <h1>Shopping Cart</h1>

      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>

      <span className="count">{itemCount} items in the bag</span>
    </header>
  );
};

export default Header;
