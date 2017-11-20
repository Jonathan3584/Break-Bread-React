import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import ResultItem from "./resultItem";

class SearchResults extends Component {
	constructor(props) {
		super(props);
		
		this.resultTile = this.resultTile.bind(this);
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

	resultTile(resultDatum, index) {
		return <ResultItem add={this.addRestaurant} data={resultDatum} />;
	}

	render() {
		console.log(
			"in ResultsDashboard.render this.props.restaurants",
			this.props.results
		);
		const results = this.props.results.map(this.resultTile);
		return (
			<div className="contents">
				<h1 className="dashboardHeader">Search Results</h1>
				<div className="dashboard">{results}</div>
			</div>
		);
	}
}

export default SearchResults;
