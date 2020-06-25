import React, { Component } from "react";
import SignUp from "./SignupComponent";
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

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar expand="md" className="navbar">
          <Nav>
            <NavItem className="text"> assignment 1 </NavItem>{" "}
          </Nav>{" "}
          <div className="container">
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav>
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </Nav>{" "}
              <Nav className="ml-auto">
                <NavLink className="nav-link" to="/signUp">
                  <span className="fa fa-user-plus fa-lg"> </span> Sign Up
                </NavLink>
                <span> &nbsp; &nbsp; &nbsp; &nbsp; </span>{" "}
                <NavLink className="nav-link" to="/login">
                  <span className="fa fa-sign-in fa-lg"> </span> Login
                </NavLink>
              </Nav>{" "}
            </Collapse>{" "}
          </div>{" "}
        </Navbar>{" "}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}> Login </ModalHeader>{" "}
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username"> Username </Label>{" "}
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />{" "}
              </FormGroup>{" "}
              <FormGroup>
                <Label htmlFor="password"> Password </Label>{" "}
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />{" "}
              </FormGroup>{" "}
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me{" "}
                </Label>{" "}
              </FormGroup>{" "}
              <Button type="submit" value="submit" color="primary">
                Login{" "}
              </Button>{" "}
            </Form>{" "}
          </ModalBody>{" "}
        </Modal>{" "}
      </div>
    );
  }
}

export default Header;
