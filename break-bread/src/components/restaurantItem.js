import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";

class RestaurantItem extends Component {
	constructor(props) {
		super(props);
		this.renderView = this.renderView.bind(this);
	}

renderView() {
	const r = this.props.data
	return(
		<div>
			<h2 class="restaurantHeader"><a href={r.url}>{r.name}</a></h2>
			<h5 class="categoryText">{r.category}</h5>
			<img src={r.photo} width="300px" alt=""/>
			<p class="ratingText">Rating: {r.rating}</p>
		</div>
		);
}


render(){
	return(
		<div className="restaurantItem">{this.renderView()}</div>
		)
}

}

export default RestaurantItem;