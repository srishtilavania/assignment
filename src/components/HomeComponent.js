import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Media } from "reactstrap";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { task: {} };
  }
  componentDidMount() {
    this.UserList();
  }

  UserList() {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ task: data }))
      .catch((error) => console.log("the error is", error));
  }
  render() {
    const taskSelected = this.state.task;
    console.log("task selected is ", taskSelected);

    return (
      <div>
        <div className="col-3 col-lg md-4 container1">
          <Breadcrumb>
            <BreadcrumbItem active>
              {" "}
              Welcome, Please Login / Signup jjj
            </BreadcrumbItem>{" "}
          </Breadcrumb>{" "}
        </div>
        <div>
          <Media tag="li">
            <Media body className="ml-5">
              <Media heading>{this.state.task[0].title}</Media>
              <p>{this.state.task[0].body}</p>
            </Media>
          </Media>
        </div>
      </div>
    );
  }
}

export default Home;
