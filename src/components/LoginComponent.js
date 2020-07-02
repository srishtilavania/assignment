import React from "react";
import { Media } from "reactstrap";
import Header from "./HeaderComponent";
import { NavLink } from "react-router-dom";

import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      showName: false,
      showForm: true,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    var formJSON = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(JSON.stringify(formJSON));
    console.log("new");
    console.log(this.props.email1);
    console.log(this.props.password1);
    this.setState({
      email: "",
      password: "",
    });
    if (
      this.props.email1 == this.state.email &&
      this.props.password1 == this.state.password
    ) {
      this.setState({
        email: "",
        password: "",
        showName: true,
        showForm: false,
      });
    } else {
      this.setState({
        email: "",
        password: "",
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.showForm && <Header />}
        <div
          style={{
            width: 500,
            margin: "50px auto",
          }}
        >
          {" "}
          {this.state.showForm && (
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label> Email </label>{" "}
                <input
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  placeholder="Enter Email Id"
                />{" "}
              </div>{" "}
              <div className="form-group">
                <label> Password </label>{" "}
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  placeholder="Enter password"
                />{" "}
              </div>{" "}
              <button type="submit" className="btn btn-primary btn-block">
                submit{" "}
              </button>{" "}
            </form>
          )}
          {this.state.showName && (
            <Navbar expand="md" className="navbar">
              <Nav>
                <NavItem className="text"> assignment 1 </NavItem>{" "}
              </Nav>{" "}
              <div className="container">
                <Nav>
                  <NavLink className="nav-link" to="/home">
                    Home{" "}
                  </NavLink>{" "}
                </Nav>{" "}
                <span className="fa fa-sign-in fa-lg"> </span> Hi!{" "}
                {this.props.name}{" "}
              </div>{" "}
            </Navbar>
          )}
          {this.state.showName && (
            <p>
              <Media tag="li">
                <Media body className="ml-5">
                  <Media heading>
                    Login Successfully!welcome!{this.props.name}{" "}
                  </Media>{" "}
                </Media>{" "}
              </Media>{" "}
            </p>
          )}{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Login;
