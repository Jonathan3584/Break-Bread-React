import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";
import PersonItem from "./personItem"

class PeopleDashboard extends Component {
	constructor(props) {
		super(props);
		
	}
	
	componentDidMount(){
		axios
		.get(`${this.props.url}/people`)
		.then(res => {
			this.props.recordPeople(res.data)
		})
		.catch(err => {
			console.log('error in PeopleDashboard, componentDidMount', err);
		});
		}
	
	personTile(personDatum, index) {

		return(
			<PersonItem
			data={personDatum}
				/>
			)
	}

	render(){
		console.log('in PeopleDashboard.render. this.props.people:', this.props.people);
		const people = this.props.people.map(this.personTile)
		return(
			<div>
				<h1 class="dashboardHeader">People Dashboard</h1>
				{people}
			</div>
			)
	}


}

export default PeopleDashboard;