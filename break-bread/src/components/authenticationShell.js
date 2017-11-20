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
import SearchResults from "./searchResults";

class AuthenticationShell extends Component {
  constructor(props) {
    super(props);
    // set up our state.
    this.state = {
      user: false,
      url: "http://localhost:3000",
      people: [],
      restaurants: [],
      results: []
    };
    this.initUser = this.initUser.bind(this);
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
    this.initUser = this.initUser.bind(this);
    this.recordPeople = this.recordPeople.bind(this);
    this.recordRestaurants = this.recordRestaurants.bind(this);
    this.recordResults = this.recordResults.bind(this);
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
            console.log("user confirmed");
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
  recordPeople(data) {
    this.setState({ people: data }, () => {
      console.log("people retrieved", this.state.people);
    });
  }
  recordRestaurants(data) {
    this.setState({ restaurants: data }, () => {
      console.log("restaurants retrieved", this.state.restaurants);
    });
  }
  recordResults(data) {
    this.setState({results: data}, () => {
      console.log("results retrieved", this.state.results);
    });
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
          exact
          path="/people"
          render={props => (
            <div>
              <NavBar logout={this.logout} />
              <PeopleDashboard
                {...props}
                url={this.state.url}
                recordPeople={this.recordPeople}
                people={this.state.people}
                user={this.state.user}
              />
            </div>
          )}
        />
        <Route
          path="/people/new"
          render={props => (
            <div>
              <NavBar logout={this.logout} />
              <NewForm
                {...props}
                url={this.state.url}
                user={this.state.user}
              />
            </div>
          )}
        />
        <Route
          path="/people/:id/edit"
          render={props => (
            <div>
              <NavBar logout={this.logout} />
              <EditForm {...props} url={this.state.url} people={this.state.people} user={this.state.user}/>
            </div>
          )}
        />
        <Route
          path="/people/:id/search"
          render={props => (
            <div>
              <NavBar logout={this.logout} />
              <SearchResults 
              {...props} 
              url={this.state.url}
              recordResults={this.recordResults}
              results={this.state.results}
              user={this.state.user} />
            </div>
          )}
        />
        <Route
          path="/people/:id"
          render={props => (
            <div>
              <NavBar logout={this.logout} />
              <RestaurantsDashboard
                {...props}
                url={this.state.url}
                recordRestaurants={this.recordRestaurants}
                restaurants={this.state.restaurants}
                userId={this.state.user.id}
              />
            </div>
          )}
        />
      </Switch>
    );
  }

  render() {
    return <div id="container">{this.renderView()}</div>;
  }
}

export default AuthenticationShell;
