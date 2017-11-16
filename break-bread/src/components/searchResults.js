import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";
import ResultItem from "./resultItem"

class SearchResults extends Component {
	constructor(props) {
		super(props);
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