import React from "react";
class Login extends React.Component {
  constructor() {
    super();
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
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
    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
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
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label> Password </label>{" "}
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />{" "}
          </div>{" "}
          <button type="submit" className="btn btn-primary btn-block">
            Submit{" "}
          </button>{" "}
        </form>{" "}
      </div>
    );
  }
}
export default Login;
