import React, { Component } from "react";
import Topnav from "../Topnav/Topnav";
import Category from "../Category";
import Slides from "../Slides";
import Items from "../Items";
// import Jumbo from "../Jumbo/Jumbo";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div>
          <Topnav />
          <Category />
          <Slides />
        </div>
        <section>
          <h1>Home page</h1>
          <div>
            <Items />
            <Items />
            <Items />
            <Items />
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
