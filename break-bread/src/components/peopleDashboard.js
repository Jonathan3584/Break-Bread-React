import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";
import PersonItem from "./personItem"

class PeopleDashboard extends Component {
	constructor(props) {
		super(props);
		this.deletePerson = this.deletePerson.bind(this);
		this.personTile = this.personTile.bind(this);
		this.refreshState = this.refreshState.bind(this);
	}
	
	componentDidMount(){
		this.refreshState();
		}
	refreshState() {
		axios
		.get(`${this.props.url}/people`)
		.then(res => {
			this.props.recordPeople(res.data)
		})
		.catch(err => {
			console.log('error in PeopleDashboard, componentDidMount', err);
		});
	}
	deletePerson(e, id){
		e.preventDefault();
		console.log(this.props)
		axios
		.delete(`${this.props.url}/people/${id}`)
		.then(res => {
			console.log('person removed from DB')
			this.refreshState();
		})
		.catch(err => {
			console.log('error in PeopleDashboard, deletePerson', err)
		})
	}
	
	personTile(personDatum, index) {

		return(
			<PersonItem
			delete={this.deletePerson}
			data={personDatum}
				/>
			)
	}

	render(){
	
		const people = this.props.people.map(this.personTile)
		return(
			<div className="contents" >
				<h1 className="dashboardHeader">People Dashboard</h1>
				<div className="dashboard">{people}</div>
			</div>
			)
	}


}

export default PeopleDashboard;