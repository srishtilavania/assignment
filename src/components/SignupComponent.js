import React from "react";
import Header from "./HeaderComponent";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",

      formErrors: {
        nameErr: "",
        passwordErr: "",
      },
      fieldValidity: {
        name: false,
        confirmPassword: false,
      },
      formValid: false,
      successMessage: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
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
  validateName = (e) => {
    const name = e.target.value;
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    this.setState({
      name: e.target.value,
    });
    if (name.length < 6) {
      formErrors.nameErr = "Name must be at least 6 chars";
      fieldValidity.name = false;
    } else {
      formErrors.nameErr = "";
      fieldValidity.name = true;
    }
    this.setState({
      fieldValidity: fieldValidity,
    });
    this.setState({
      formValid: fieldValidity.name,
    });
  };

  validatePassword = (e) => {
    const password = e.target.value;
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    this.setState({
      confirmPassword: e.target.value,
    });
    console.log(this.state.password);
    if (this.state.password != password) {
      formErrors.passwordErr = "Password should match";
      fieldValidity.confirmPassword = false;
    } else {
      formErrors.passwordErr = "";
      fieldValidity.confirmPassword = true;
    }
    this.setState({
      fieldValidity: fieldValidity,
    });
    this.setState({
      formValid: fieldValidity.confirmPassword,
    });
  };

  onSubmit(e) {
    e.preventDefault();

    var formJSON = {
      Name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(JSON.stringify(formJSON));
  }

  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            width: 500,
            margin: "50px auto",
          }}
        >
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
              <label> Name </label>{" "}
              <input
                type="name"
                className="form-control"
                value={this.state.name}
                onChange={this.validateName}
                placeholder="Enter Your Name"
              />{" "}
            </div>{" "}
            <span className="text-danger">
              {" "}
              {this.state.formErrors.nameErr}{" "}
            </span>{" "}
            <div className="form-group">
              <label> Password </label>{" "}
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                placeholder="Enter Password"
              />{" "}
            </div>{" "}
            <div className="form-group">
              <label> Confirm Password </label>{" "}
              <input
                type="password"
                className="form-control"
                value={this.state.confirmPassword}
                onChange={this.validatePassword}
                placeholder="Re Enter the Password"
              />{" "}
            </div>{" "}
            <span className="text-danger">
              {" "}
              {this.state.formErrors.passwordErr}{" "}
            </span>{" "}
            <button
              type="submit"
              disabled={!this.state.formValid}
              className="btn btn-primary btn-block"
            >
              Submit{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default SignUp;
