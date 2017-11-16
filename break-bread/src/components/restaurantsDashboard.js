import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";
import RestaurantItem from "./restaurantItem"

class RestaurantsDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurants: []
		}
	}

	componentDidMount(){
		axios
		.get(`${this.props.url}/people/${:id}`)
	}	

	formatAddress(){
		//Format address for google geocoding API
	}
	searchRestaurants(){

	}


	render(){
		return(
			<div>
			<h1 class="dashboardHeader">Restaurants Dashboard</h1>
			<RestaurantItem />
			<p>link to fire API calls</p>
			</div>
			);
	}


}

export default RestaurantsDashboard;