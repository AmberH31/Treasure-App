import React, { Component } from "react";
import Topnav from "../Topnav/Topnav";
import Category from "../Category";
import Jumbo from "../Jumbo/Jumbo";

class Home extends Component {
  render() {
    return (
      <div>
        <Category />
        <Jumbo />
        <h1>Home page</h1>
      </div>
    );
  }
}
export default Home;
