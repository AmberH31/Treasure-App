import React, { Component } from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
// import Topnav from "./components/Topnav";
import Home from "./components/Home";
import Topnav from "./components/Topnav";
import ItemsInfo from "./components/ItemsInfo";
import Items from "./components/Items";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: "",
        email: "",
        password: ""
      },
      isLoggedIn: true,
      loginFailed: false,
      productList: [],
      page: "",
      category: ""
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     // pretend auto log in
  //     this.setState({
  //       user: {
  //         userName: "test_user",
  //         email: "test@user",
  //         password: "p@ssw0rd"
  //       },
  //       isLoggedIn: true
  //     });
  //   }, 1000);
  // }

  loginUser = user => {
    //    this.setState({
    //    user: user
    //});
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

  render() {
    return (
      <React.Fragment>
        {this.state.isLoggedIn && <Topnav />}
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
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
