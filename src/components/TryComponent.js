import React, { Component } from "react";

class TryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onchange1 = this.onchange1.bind(this);
    this.onchange2 = this.onchange2.bind(this);
    this.onchange3 = this.onchange3.bind(this);

    this.state = {
      one: "",
      two: "",
      three: "",
    };
  }

  onchange1(e) {
    this.setState({
      one: e.target.value,
    });
    console.log(this.state.one);
  }

  onchange2(e) {
    this.setState({
      two: e.target.value,
    });
  }

  onchange3(e) {
    this.setState({
      three: e.target.value,
    });
  }

  handleChange(e) {
    e.preventDefault();
    var formJSON = {
      one: this.state.one,
      two: this.state.two,
      three: this.state.three,
    };
    console.log(JSON.stringify(formJSON));
    this.props.onTemperatureChange(
      this.state.one,
      this.state.two,
      this.state.three
    );
  }

  render() {
    const one = this.props.one;
    const two = this.props.two;
    const three = this.props.three;

    return (
      <fieldset>
        <legend> Enter temperature in </legend>{" "}
        <input value={this.state.one} onChange={this.onchange1} />
        <input value={this.state.two} onChange={this.onchange2} />
        <input value={this.state.three} onChange={this.onchange3} />
        <button onClick={this.handleChange}>button</button>
      </fieldset>
    );
  }
}

export default TryComponent;
