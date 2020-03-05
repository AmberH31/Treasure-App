import React, { Component } from "react";
// import utils from "./utils/API";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup/Signup";

// import Topnav from "./components/Topnav";
import Home from "./components/Home";
import Topnav from "./components/Topnav";
import ItemsInfo from "./components/ItemsInfo";
import data from "./camera.json";
import Cart from "./components/Cart/Cart";
import API from "./components/utils/API";
import Checkout from "./components/Checkout";

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
      loginFailed: false,
      productList: [],
      page: "",
      category: ""
    };
  }
  componentDidMount() {
    const user =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : null;
    console.log(localStorage.getItem("user"));
    // pretend auto log in
    this.setState({
      user: user,
      isLoggedIn: user ? true : false
    });
  }

  loginUser = user => {
    API.doPost("/api/login", user, data => {
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data.user));
      this.setState({
        user: data.user,
        isLoggedIn: true
      });
    });

    //async programming
    //axios api calls will return promises.
    //127.0.0.1 === localhost same thing
    //http call methods:(they're conventions)
    //post: create a new resource =>Create
    //get=>Rread
    //put=>Uupdate
    //delete =>Ddlete
    //axios.post("http://127.0.0.1:3000/login",{username:"",password:""},{headers:{}}).then((res)=>{
    // if (res.data.success===true){ this.setState({user:user,isLoggedIn:true})}else{
    //this.setState({loginFailed:true})
    //}
    //}).catch(console.log);
  };

  logoutUser = user => {
    API.doPost("/api/logout", user, data => {
      console.log(data);
      localStorage.removeItem("user");
      this.setState({
        isLoggedIn: false,
        user: ""
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoggedIn && (
          <Topnav user={this.state.user} logoutUser={this.logoutUser} />
        )}
        <Router>
          <div className="container-fluid">
            <Switch>
              <Route
                exact
                path="/"
                render={props =>
                  // <Home />
                  //spread operator  can be used on both object & array [...props]              }
                  this.state.isLoggedIn ? (
                    <Home />
                  ) : (
                    <Login
                      {...props}
                      data={data}
                      isLoggedIn={this.state.isLoggedIn}
                      loginUser={this.loginUser}
                      user={this.state.user}
                      loginFailed={this.state.loginFailed}
                      //overwrite these three values
                    />
                  )
                }
              />
              {/* <Route path="/log-in" component={Login} /> */}
              {/* <Route path="/home" component={Home} /> */}
              <Route path="/itemsinfo" component={ItemsInfo} />
              <Route path="/cart" component={Cart} />
              <Route path="/signup" component={Signup} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
