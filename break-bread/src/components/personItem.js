import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";

class PersonItem extends Component {
	constructor(props) {
		super(props);
		this.renderView = this.renderView.bind(this);
	}

renderView() {
	const p = this.props.data
	return(
		<div>
			<h2 class="nameHeader">{p.name}</h2>
			<h4 class="relationshipText">{p.relationship}</h4>
			<p class="addressText">{p.address}</p>
			<p class="dateText">{p.birthday}</p>
			<p class="budgetText">${p.budget}</p>
			<Link class="personLink" to={`../people/${p.id}`}>Pick me!</Link>
			<Link class="editLink" to={`../people/${p.id}/edit`}>Edit me!</Link>
		</div>
		);
}


render(){
	return(
		<div className="personItem">{this.renderView()}</div>
		)
}


}

export default PersonItem;