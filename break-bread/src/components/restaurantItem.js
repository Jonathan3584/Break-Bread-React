import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "../App.css";
import ImageParse from '../helpers/imageParse'

class RestaurantItem extends Component {
	constructor(props) {
		super(props);
		this.renderView = this.renderView.bind(this);
	}
	renderView() {
		const r = this.props.data;
		const onClick = e => {
			this.props.delete(e, r.id);
		};
		return (
			<div className="item">
				<h2 className="nameHeader link">
					<a rel="external" target="_blank" href={r.url}>
						{r.name}
					</a>
				</h2>
				<h5>{r.category}</h5>
				<img src={ImageParse.match(r.photo)} width="80%" alt="" />
				<p>Rating: {r.rating}</p>
				<p className="link"><a onClick={onClick}>
					Delete this restaurant
				</a></p>
			</div>
		);
	}

	render() {
		return this.renderView();
	}
}

export default RestaurantItem;
