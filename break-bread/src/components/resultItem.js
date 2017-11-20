import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";

class ResultItem extends Component {
	constructor(props) {
		super(props);
		this.renderView = this.renderView.bind(this);
	}
imageParse(string) {
	if (string === "") {"../assets/buns.jpg"}
	if (string === "") {"../assets/burger.jpg"}
	if (string === "") {"../assets/curry.jpg"}
	if (string === "") {"../assets/clams.jpg"}
	if (string === "") {"../assets/fish.jpg"}
	if (string === "") {"../assets/melon.jpg"}
	if (string === "") {"../assets/pasta.jpg"}
	if (string === "") {"../assets/tacos.jpg"}
	if (string === "") {"../assets/mezze.jpg"}
	if (string === "") {"../assets/sushi.jpg"}	
	else {"../assets/tomato.jpg"}
}
renderView() {
	const r = this.props.data;
	

	return (
		<a rel="external" target="_blank" href={r.url}>
		<div className="item">
			<h2 className="nameHeader">{r.name}</h2>
		</div>
		</a>
		)
}


render(){
	const r = this.props.data;
	return this.renderView();
}

}

export default ResultItem;