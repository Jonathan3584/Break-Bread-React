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
			<h6>Budget: ${p.budget}</h6>
			<p className="link"><Link to={`../people/${p.id}`}>Pick me!</Link></p>
			<p className="link"><Link to={`../people/${p.id}/edit`}>Edit me!</Link></p>
			<p className="link"><a onClick={onClick}>Delete me!</a></p>
		</div>
		);
}


render(){
	return this.renderView();
}

}

export default PersonItem;