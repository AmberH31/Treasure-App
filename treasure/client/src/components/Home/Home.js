import React, { Component } from "react";
import Topnav from "../Topnav/Topnav";
import Category from "../Category";
import Slides from "../Slides";
import Items from "../Items";
import Footer from "../Footer";
// import Jumbo from "../Jumbo/Jumbo";
import "./Home.css";
// import testData from "../../test.json";

class Home extends Component {
  // constructor()

  render() {
    return (
      <div className="home-container">
        <Slides />

        <section>
          <h1 className="title-name d-flex justify-content-center">Products</h1>
          <Category />

          <div className="items row home d-flex justify-content-center">
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
export default Home;
