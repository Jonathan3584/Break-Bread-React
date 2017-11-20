import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";
import RestaurantItem from "./restaurantItem"

class RestaurantsDashboard extends Component {
	constructor(props) {
		super(props);
		this.deleteRestaurant = this.deleteRestaurant.bind(this);
		this.restaurantTile = this.restaurantTile.bind(this);
		this.refreshState = this.refreshState.bind(this);
	}

	componentDidMount(){
		this.refreshState();
	}	
	refreshState(){
		console.log("restaurant dashboard, componentDidMount, this.props", this.props)
		axios
		.get(`${this.props.url}/people/${this.props.match.params.id}/restaurants`)
		.then(res => {
			this.props.recordRestaurants(res.data)
		})
		.catch(err => {
			console.log('error in RestaurantsDashboard, componentDidMount', err)
		});
	}

	deleteRestaurant(e, id) {
		e.preventDefault();

		axios
		.delete(`${this.props.url}/people/${this.props.match.params.id}/restaurants/${id}`)
		.then(res => {
			console.log('restaurant removed from DB');
			this.refreshState();
		})
		.catch(err => {
			console.log('error in RestaurantsDashboard, deleteRestaurant', err)
		})
	}

	restaurantTile(restaurantDatum, index) {

		return(
			<RestaurantItem
			delete={this.deleteRestaurant}
			data={restaurantDatum}
				/>
			)
	}

	render(){
		console.log('in RestaurantsDashboard.render this.props.restaurants', this.props.restaurants)
		const restaurants = this.props.restaurants.map(this.restaurantTile)
		if (restaurants.length === 0) {
			return(
		 <div className="contents">
			<h1 className="dashboardHeader">Restaurants Dashboard</h1>
			<div className="dashboard">
			<h3><Link className="link" to={`${this.props.match.params.id}/search`}>You don't have any restaurants saved yet.  Click to add some!</Link></h3>
			</div>
			</div>
			);
		}
		else{
		return(
			<div className="contents">
			<h1 className="dashboardHeader">Restaurants Dashboard</h1>
			<div className="dashboard">{restaurants}</div>
			<Link className="link" to={`${this.props.match.params.id}/search`}>Find More Restaurants</Link>
			</div>
			);
	}
	}


}

export default RestaurantsDashboard;