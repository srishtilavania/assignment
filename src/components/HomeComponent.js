import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Media } from "reactstrap";
import Header from "./HeaderComponent";

class Home extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    const value = "";
    this.state = {
      error: null,
      isLoaded: false,
      info: [],
      search: "",
      idInfo: [],
      error1: null,
      isLoaded1: false,
      showName: false,
    };
  }

  onChangeSearch(e) {
    this.setState({ search: e.target.value });
    this.value = e.target.value;
    console.log("gggg" + this.value);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.search);
    console.log(this.state.idInfo);
    this.setState({
      showName: true,
    });
    this.componentDidMount();
  }
  componentDidMount() {
    console.log("dd" + this.value);
    const a = this.value;
    console.log(a);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          info: result,
        });
      })
      .catch((error) =>
        this.setState({
          isLoaded: true,
          error: error,
        })
      );

    fetch("http://jsonplaceholder.typicode.com/posts?id=2")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded1: true,
          idInfo: result,
        });
      })
      .catch((error) =>
        this.setState({
          isLoaded1: true,
          error1: error,
        })
      );

    console.log("fddd" + this.state.idInfo);
  }

  render() {
    const { error, isLoaded, info } = this.state;

    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      console.log(this.state.info[0].id);
      console.log(this.state.info.length);
      const a = this.state.info.length;
      const first = info.map((dish) => {
        if (dish.id <= 10) {
          return (
            <div key={dish.id} className="col-12 mt-5">
              <Media tag="li">
                <Media body className="ml-5">
                  <Media heading> Title: -{dish.title} </Media>{" "}
                  <p> Id: -{dish.id} </p> <p> User Id: -{dish.userId} </p>{" "}
                  <p> Body: -{dish.body} </p>{" "}
                </Media>{" "}
              </Media>{" "}
            </div>
          );
        }
      });
      const second = info.map((dish) => {
        if (dish.id <= a && dish.id >= a - 9) {
          return (
            <div key={dish.id} className="col-12 mt-5">
              <Media tag="li">
                <Media body className="ml-5">
                  <Media heading> Title: -{dish.title} </Media>{" "}
                  <p> Id: -{dish.id} </p> <p> User Id: -{dish.userId} </p>{" "}
                  <p> Body: -{dish.body} </p>{" "}
                </Media>{" "}
              </Media>{" "}
            </div>
          );
        }
      });

      return (
        <div>
          <Header />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label> Search </label>{" "}
              <input
                type="text"
                value={this.state.search}
                className="form-control"
                onChange={this.onChangeSearch}
              />{" "}
              <button type="submit" className="btn btn-primary btn-block">
                submit{" "}
              </button>{" "}
              {this.state.showName && (
                <p>
                  <Media tag="li">
                    <Media body className="ml-5">
                      <Media heading>
                        Title: -{this.state.idInfo[0].title}{" "}
                      </Media>{" "}
                      <p> Id: -{this.state.idInfo[0].id} </p>{" "}
                      <p> User Id: -{this.state.idInfo[0].userId} </p>{" "}
                      <p> Body: -{this.state.idInfo[0].body} </p>{" "}
                    </Media>{" "}
                  </Media>{" "}
                </p>
              )}{" "}
            </div>{" "}
          </form>{" "}
          <div className="container">
            <div className="row">
              <Media Heading className="heading">
                First 10 Records{" "}
              </Media>
              <Media list> {first} </Media>{" "}
              <Media Heading className="heading">
                Last 10 Records{" "}
              </Media>{" "}
              <Media list> {second} </Media>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      );
    }
  }
}

export default Home;
