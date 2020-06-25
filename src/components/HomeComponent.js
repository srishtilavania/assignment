import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
class Home extends Component {
  render() {
    return (
      <div className="col-3 col-lg md-4 container1">
        <Breadcrumb>
          <BreadcrumbItem active>Welcome, Please Login/Signup</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
}

export default Home;
