import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";
import ResultItem from "./resultItem"

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: []
		}
	}
	componentDidMount(){
		axios
		.get(`${this.props.url}/people/${this.props.match.params.id}/restaurants/search`)
		.then(res => {
			this.setState({ results: res.data }, () =>{
				console.log(this.state.results)
			})
		})
		.catch(err => {
			console.log('error in SearchResults, componentDidMount', err);
		});
	}



render(){
	return(
		<div>
		<h1 class="dashboardHeader">Search Results</h1>
		<ResultItem />
		</div>
		);
}


}

export default SearchResults;