import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
// import Topnav from "./components/Topnav";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: "",
        email: "",
        password: ""
      },
      isLoggedIn: false,
      productList: [],
      page: "",
      category: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // pretend auto log in
      this.setState({
        user: {
          userName: "test_user",
          email: "test@user",
          password: "p@ssw0rd"
        },
        isLoggedIn: true
      });
    }, 1000);
  }

  loginUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                // <Home />
                <Login
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  loginUser={this.loginUser}
                  user={this.state.user}
                />
              )}
            />
            <Route path="/sign-in" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
