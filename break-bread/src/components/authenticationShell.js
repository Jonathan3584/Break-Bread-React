import React, { Component } from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import Cookies from "../helpers/cookies";
import UserAuth from "./userAuth";
import axios from "axios";
import "../App.css";
import NavBar from "./navBar";
import NewForm from "./newForm";
import EditForm from "./editForm";
import PeopleDashboard from "./peopleDashboard";
import RestaurantsDashboard from "./restaurantsDashboard";

class AuthenticationShell extends Component {
  constructor(props) {
    super(props);
    // set up our state.
    this.state = {
      user: false,
      url: "http://localhost:3000"
    };
    this.initUser = this.initUser.bind(this);
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
    this.initUser = this.initUser.bind(this);

  }

  componentDidMount() {
    this.initUser();
  }

  // method to initialize our user
  initUser() {
    // get the token from the cookie
    const token = Cookies.get("token");

    // if there is a token
    if (token && token !== "") {
      // send a request to our API to validate the user
      axios
        .get(`${this.state.url}/users/validate`, {
          // include the token as a parameter
          params: { auth_token: token }
        })
        .then(res => {
          // the response will be the user
          // set the user in the state, and change the mode to content
          this.setState({ user: res.data }, () => {
            this.props.history.push(`/people/`);
          });
        })
        .catch(err => {
          // if there is an error
          Cookies.set("token", ""); // take away the cookie
          // change the state so that there is no user and render the auth
          this.setState({ user: false }, () => {
            this.props.history.push(`/auth/`);
          });
        });
    } else {
      // if there is no token
      // we should render the auth forms
      <Redirect to="/auth" />;
    }
  }

  // method to set a user
  setUser(user) {
    // set a cookie with the user's token
    Cookies.set("token", user.token);
    // set state to have the user and the mode to content
    this.setState({ user: user }, () => {
      this.props.history.push(`/people/`);
    });
  }
  logout() {
    Cookies.set("token", "");
    this.setState({ user: false }, () => {
      this.props.history.push(`/auth/`);
    });
  }

  linkToPeopleDashboard() {
    //Axios call to Ruby server for people in DB
    //Render route for peopleDashboard
  }

  linkToNewPerson(){

  }

  linkToEditPerson(){

  }

  linkToRestaurantsDashboard() {
    //Axios call to Ruby server for restaurants in DB
    //Render route for restaurantsDashboard
  }

  searchRestaurants() {
    //Axios call to Ruby server for two API calls
    //Render route for search Results
  }

  renderView() {
    return (
      <Switch>
        <Route exact path="/" render={_ => <Redirect to="/auth" />} />
        <Route
          exact
          path="/auth"
          render={props => (
            <UserAuth {...props} setUser={this.setUser} url={this.state.url} />
          )}
        />
        <Route
          path="/people"
          render={props => <PeopleDashboard {...props} url={this.state.url} />}
        />
        <Route
          path="/people/new"
          render={props => <NewForm {...props} url={this.state.url} />}
        />
        <Route
          path="/people/edit"
          render={props => <EditForm {...props} url={this.state.url} />}
        />
        <Route
          path="/people/:id"
          render={props => <RestaurantsDashboard {...props} url={this.state.url} />}
        />
      </Switch>
    );
  }

  render() {
    return(
    <div id="container">
      <div id="navBar">
        <NavBar logout={this.logout}/>
      </div>
      <div className="contents">{this.renderView()}</div>;
    </div>
    );
  }
}

export default AuthenticationShell;
