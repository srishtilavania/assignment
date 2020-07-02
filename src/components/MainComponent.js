import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import SignUp from "./SignupComponent";
import Login from "./LoginComponent";
import TryComponent from "./TryComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
    };

    this.handleSignUp = this.handleSignUp.bind(this);
  }
  handleSignUp(email, name, password) {
    this.setState({
      email: email,
      name: name,
      password: password,
    });
  }

  render() {
    const email = this.state.email;
    const name = this.state.name;
    const password = this.state.password;
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/signUp"
            component={() => (
              <SignUp
                email={email}
                name={name}
                password={password}
                onSignUp={this.handleSignUp}
              />
            )}
          />
          <Route
            exact
            path="/login"
            component={() => (
              <Login
                email1={this.state.email}
                password1={this.state.password}
                name={this.state.name}
              />
            )}
          />{" "}
          <Redirect to="/home" />
        </Switch>{" "}
      </div>
    );
  }
}

export default Main;
