import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Topnav from "./components/Topnav";

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
          <Topnav user={this.state.user} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Login
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  loginUser={this.loginUser}
                  user={this.state.user}
                />
              )}
            />
            <Route path="/sign-in" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
