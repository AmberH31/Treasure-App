import React from "react";
import ProductList from "../ProductList/ProductList";
import Summary from "../Summary/Summary";
import Header from "../Header/Header";
import "../../test.json";

import "./Cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          image: "https://via.placeholder.com/200x150",
          name: "PRODUCT ITEM NUMBER 1",
          description: "Description for product item number 1",
          price: 5.99,
          quantity: 2
        },
        {
          image: "https://via.placeholder.com/200x150",
          name: "PRODUCT ITEM NUMBER 2",
          description: "Description for product item number 1",
          price: 9.99,
          quantity: 1
        }
      ],
      tax: 5,
      promotions: [
        {
          code: "SUMMER",
          discount: "50%"
        },
        {
          code: "AUTUMN",
          discount: "40%"
        },
        {
          code: "WINTER",
          discount: "30%"
        }
      ],
      promoCode: "",
      discount: 0,
      itemCount: 0
    };
  }

  onChangeProductQuantity = (index, event) => {
    const products = this.state.products;
    const value = event.target.value;
    const valueInt = parseInt(value);

    // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
    if (value === "") {
      products[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      products[index].quantity = valueInt;
    }

    this.setState({ products });
  };

  onRemoveProduct = i => {
    const products = this.state.products.filter((product, index) => {
      return index != i;
    });

    this.setState({ products });
  };

  onEnterPromoCode = event => {
    this.setState({
      promoCode: event.target.value
    });
  };

  checkPromoCode = () => {
    const promotions = this.state.promotions;

    for (var i = 0; i < promotions.length; i++) {
      if (this.state.promoCode === promotions[i].code) {
        this.setState({
          discount: parseFloat(promotions[i].discount.replace("%", ""))
        });
        return;
      }
    }

    alert("Sorry, the Promotional code you entered is not valid!");
  };

  render() {
    const products = this.state.products;

    return (
      <div>
        <Header products={products} />

        {products.length > 0 ? (
          <div>
            <ProductList
              products={products}
              onChangeProductQuantity={this.onChangeProductQuantity}
              onRemoveProduct={this.onRemoveProduct}
            />

            <Summary
              products={products}
              discount={this.state.discount}
              tax={this.state.tax}
              onEnterPromoCode={this.onEnterPromoCode}
              checkPromoCode={this.checkPromoCode}
            />
          </div>
        ) : (
          <div className="empty-product">
            <h3>There are no products in your cart.</h3>
            <button>Shopping now</button>
          </div>
        )}
      </div>
    );

    //     function formatCurrency(value) {
    // return Number(value).toLocaleString("en-US", {
    //   style: "currency",
    //   currency: "USD"
    // });
  }
}

export default Cart;
