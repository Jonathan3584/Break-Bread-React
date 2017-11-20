import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import ResultItem from "./resultItem";

class SearchResults extends Component {
	constructor(props) {
		super(props);
		
		this.resultTile = this.resultTile.bind(this);
		this.addRestaurant = this.addRestaurant.bind(this);
	}
	componentDidMount() {
		axios
			.get(
				`${this.props.url}/people/${this.props.match.params
					.id}/restaurants/search`
			)
			.then(res => {
				console.log('componentDidMount search Results')
				this.props.recordResults(res.data);
			})
			.catch(err => {
				console.log("error in SearchResults, componentDidMount", err);
			});
	}

	addRestaurant(e, index) {
		e.preventDefault();
		const r = this.props.results[index]

		const restaurant = {restaurant: {
			name: r.name,
			rating: r.rating,
			url: r.url,
			photo: r.photo,
			category: r.category,
			person_id: this.props.match.params.id
		}}
		
		axios
		.post(`${this.props.url}/people/${this.props.match.params
					.id}/restaurants/`, restaurant)
	}

	resultTile(resultDatum, index) {
		return <ResultItem add={this.addRestaurant} index={index} data={resultDatum} />;
	}

	render() {
		console.log(
			"in ResultsDashboard.render this.props.restaurants",
			this.props.results
		);
		const results = this.props.results.map(this.resultTile);
		return (
			<div className="contents">
				<h1 className="dashboardHeader">Click A Tile to Add it!</h1>
				<div className="dashboard">{results}</div>
			</div>
		);
	}
}

export default SearchResults;
