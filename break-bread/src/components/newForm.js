import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";

class NewForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			address: '',
			relationship: '',
			birthDate: '',
			budget: ''
		}
		this.nameChange = this.nameChange.bind(this);
		this.addressChange = this.addressChange.bind(this);
		this.relationshipChange = this.relationshipChange.bind(this);
		this.birthDateChange = this.birthDateChange.bind(this);
		this.budgetChange = this.budgetChange.bind(this);
		this.personSubmit = this.personSubmit.bind(this);
	}
personSubmit(event){
	event.preventDefault();
	const {
		name,
		address,
		relationship,
		birthDate,
		budget
	} = this.state;
	const	userId = this.props.userId;
	axios
	.post(`${this.props.url}/people/`, {person:
		{
		name: name,
		address: address,
		relationship: relationship,
		birth_date: birthDate,
		budget: budget,
		user_id: userId
		}
	})
	.then(response => {
		console.log("added person")
		this.props.history.push(`/people`);
	})
	.catch(err => {
		console.log('Error in newForm, personSubmit', err)
	})
}
nameChange(event) {
event.preventDefault();
this.setState({
	name: event.target.value
})	
}
addressChange(event) {
event.preventDefault();
this.setState({
	address: event.target.value
})	
}
relationshipChange(event) {
event.preventDefault();
this.setState({
	relationship: event.target.value
})	
}
birthDateChange(event) {
event.preventDefault();
this.setState({
	birthDate: event.target.value
})	
}
budgetChange(event) {
event.preventDefault();
this.setState({
	budget: event.target.value
})	
}


render(){
	return(
		<div className="contents">
				<h1 className="dashboardHeader">Add Someone You Care About</h1>
				<form className="dashboard" onSubmit={this.personSubmit}>
					<label>Name: </label>
					<input
						type="text"
						onChange={this.nameChange}
						value={this.state.name}
					/>
					<br />
					<label>Address: </label>
					<input
						type="text"
						onChange={this.addressChange}
						value={this.state.address}
					/>
					<br />
					<label>Relationship: </label>
					<input
						type="text"
						onChange={this.relationshipChange}
						value={this.state.relationship}
					/>
					<br />
					<label>Birthday: </label>
					<input
						type="date"
						onChange={this.birthDateChange}
						value={this.state.birthDate}
					/>
					<br />
					<label>Budget: </label>
					<input
						type="text"
						onChange={this.budgetChange}
						value={this.state.budget}
					/>
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
);
}


}

export default NewForm;