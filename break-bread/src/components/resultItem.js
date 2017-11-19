import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";

class ResultItem extends Component {
	constructor(props) {
		super(props);
	}



render(){
	const r = this.props.data;
	return(
		<div>
			<h1>Result Item</h1>
		</div>
		)
}


}

export default ResultItem;