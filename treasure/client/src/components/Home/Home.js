import React, { Component } from "react";
import Topnav from "../Topnav/Topnav";
import Category from "../Category";
import Slides from "../Slides";
import Item from "../Items";
import Footer from "../Footer";
import API from "./../utils/API"
// import Jumbo from "../Jumbo/Jumbo";
import "./Home.css";
// import testData from "../../test.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
  }
  getProducts = () => {
    API.doGet('http://localhost:8080/api/products', (data) => {
      this.setState((state) => ({ ...state, products: data }))
    })
  }
  componentWillMount() {
    this.getProducts();
  }
  render() {
    console.log(this.products)
    return (
      <div className="home-container">
        <Slides />

        <section>
          <h1 className="title-name d-flex justify-content-center">Products</h1>
          <Category />

          <div className="items row home d-flex justify-content-center">
            {this.state.products.map((product, index) => (
              <Item key={index} product={product} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
export default Home;
