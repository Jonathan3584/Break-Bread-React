import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";

class PersonItem extends Component {
	constructor(props) {
		super(props);
		this.renderView = this.renderView.bind(this);
		this.deletePerson = this.deletePerson.bind(this);
	}
deletePerson(e, id){
	this.props.delete(e, id);
}
renderView() {
	const onClick = e => {
		this.deletePerson(e, p.id);
	}
	const p = this.props.data
	return(
		<div className="personItem">
			<h2 className="nameHeader">{p.name}</h2>
			<h4 className="relationshipText">{p.relationship}</h4>
			<p className="addressText">{p.address}</p>
			<p className="dateText">{p.birthday}</p>
			<p className="budgetText">${p.budget}</p>
			<Link className="link" to={`../people/${p.id}`}>Pick me!</Link>
			<Link className="link" to={`../people/${p.id}/edit`}>Edit me!</Link>
			<a className="link" onClick={onClick}>Delete me!</a>
		</div>
		);
}


render(){
	return this.renderView();
}

}

export default PersonItem;