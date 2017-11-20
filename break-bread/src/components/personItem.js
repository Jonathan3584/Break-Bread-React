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
	const onClick = e => {
		this.props.delete(e, p.id);
	}
	const p = this.props.data
	return(
		<div className="item">
			<h2 className="nameHeader">{p.name}</h2>
			<h4>{p.relationship}</h4>
			<p>{p.birthday}</p>
			<p>Budget: ${p.budget}</p>
			<Link className="link" to={`../people/${p.id}`}>Pick me!</Link>
			<br/>
			<Link className="link" to={`../people/${p.id}/edit`}>Edit me!</Link>
			<br/>
			<a className="link" onClick={onClick}>Delete me!</a>
		</div>
		);
}


render(){
	return this.renderView();
}

}

export default PersonItem;