import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import SignUp from "./SignupComponent";
import Login from "./LoginComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Switch>
          <Route path="/home" component={HomePage} />{" "}
          <Route exact path="/signUp" component={() => <SignUp />} />{" "}
          <Route
            exact
            path="/login"
            component={() => (
              <Login email1="srish@sg" password1="sri" name="Srishti" />
            )}
          />{" "}
          <Redirect to="/home" />
        </Switch>{" "}
      </div>
    );
  }
}

export default Main;
