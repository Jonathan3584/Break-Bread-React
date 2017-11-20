import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "../App.css";

class RestaurantItem extends Component {
	constructor(props) {
		super(props);
		this.renderView = this.renderView.bind(this);
	}
	
	renderView() {
		const r = this.props.data;
		return (
			<a rel="external" target="_blank" href={r.url}>
				<div className="item">
					<h2 className="nameHeader">{r.name}</h2>
					<h5>{r.category}</h5>
					<img src={r.photo} width="80%" alt="" />
					<p>Rating: {r.rating}</p>
				</div>
			</a>
		);
	}

	render() {
		return this.renderView();
	}
}

export default RestaurantItem;
