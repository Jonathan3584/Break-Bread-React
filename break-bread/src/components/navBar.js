import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";

class NavBar extends Component {
	constructor(props) {
		super(props);
	}



render(){
	return(
		<div>
			<h1>Break Bread</h1>
			<Link class="navLink" to="../people">People</Link>
			<Link class="navLink" to="../people/new">New Person</Link>
			<p class="navLink" onClick={this.props.logout}>Log Out</p>
		</div>)
}


}

export default NavBar;