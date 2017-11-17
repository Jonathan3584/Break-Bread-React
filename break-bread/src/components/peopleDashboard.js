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

	deletePerson(){
		console.log(this.props)
		// axios
		// .delete(`${this.props.url}/people/${id}`)
		// .then(res => {
		// 	console.log('person removed from DB')
		// })
		// .catch(err => {
		// 	console.log('error in PeopleDashboard, deletePerson', err)
		// })
	}
	
	personTile(personDatum, index) {

		return(
			<PersonItem
			data={personDatum}
				/>
			)
	}

	render(){
	
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