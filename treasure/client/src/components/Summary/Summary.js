import React from "react";
import "../Cart/Cart.css";

const Summary = props => {
  const subTotal = props.products.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);
  const discount = (subTotal * props.discount) / 100;
  const tax = props.tax;
  const total = subTotal - discount + tax;

  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" onChange={props.onEnterPromoCode} />
        <button type="button" onClick={props.checkPromoCode} />
      </div>

      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{subTotal}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount <span>{discount}</span>
            </li>
          )}
          <li>
            Tax <span>{tax}</span>
          </li>
          <li className="total">
            Total <span>{total}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
};

export default Summary;
