import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="navBar">
				<div id="navHeader">
					<h1>Break Bread</h1>
				</div>
				<div id="navLinks">
					<Link class="navLink" to="/people">
						People
					</Link>
					<Link class="navLink" to="../people/new">
						New Person
					</Link>
					<a class="navLink" onClick={this.props.logout}>
						Log Out
					</a>
				</div>
			</div>
		);
	}
}

export default NavBar;
