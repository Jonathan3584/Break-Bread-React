import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";
import ImageParse from '../helpers/imageParse'

class ResultItem extends Component {
	constructor(props) {
		super(props);
		this.renderView = this.renderView.bind(this);
	}

renderView() {
	const r = this.props.data;
	const onClick = e => {
		this.props.add(e, this.props.index)
	}

	return (
		<div className="item">
			<h2 className="nameHeader"><a rel="external" target="_blank" href={r.url}>{r.name}</a></h2>
			<p>{r.category}</p>
			<img src={ImageParse.match(r.photo)} width="80%" alt=""/>
			<p>Rating: {r.rating}</p>
			<h4 onClick={onClick}>Add {r.name}</h4>
		</div>
		)
}


render(){
	const r = this.props.data;
	return this.renderView();
}

}

export default ResultItem;