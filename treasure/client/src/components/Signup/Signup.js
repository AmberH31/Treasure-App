import React, { Component } from "react";
import "./Signup.css";
import { withRouter } from "react-router-dom";
class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    await this.props.registerUser(user, () => {
      this.props.history.push("/")
    });

  };

  render() {
    if (this.props.isLoggedIn) {
    }
    return (
      <div className="signup row d-flex justify-content-center ">
        <form className="col-md-6 ">
          <h3 className="text-center">Sign Up</h3>
          {this.props.loginFailed && "please check your username or password"}
          <div className="form-group">
            <label>User Name</label>
            <input
              onChange={this.handleInputChange}
              type="name"
              name="name"
              value={this.state.name}
              className="form-control"
              placeholder="Enter full name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={this.handleInputChange}
              type="email"
              name="email"
              value={this.state.user}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              onChange={this.handleInputChange}
              type="password"
              name="password"
              value={this.state.password}
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-block"
          >
            Submit
          </button>
          <p className="text-right">
            Already have account? <a href="./">Log In</a>
          </p>
        </form>
        {/* {content} */}
      </div>
    );
  }
}
export default withRouter(Signup);