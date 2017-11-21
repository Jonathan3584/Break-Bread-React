import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../App.css";

class EditForm extends Component {
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
		this.personSubmit = this.personSubmit.bind(this)
	}
	componentDidMount () {
		const p = this.props.people.filter(person => {
		console.log(person.id)
		return person.id === parseInt(this.props.match.params.id)
		})[0];
		this.setState({
			name: p.name, 
			address: p.address, 
			relationship: p.relationship, 
			birthDate: p.birthDate, 
			budget: p.budget})
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
	console.log(this.state);
	axios
	//THIS URL MAY NOT BE ACCURATE -- PARAMS.ID is a placeholder
	.put(`${this.props.url}/people/${this.props.match.params.id}`, {auth_token: this.props.user.token,
		person:
		{
		name: name,
		address: address,
		relationship: relationship,
		birth_date: birthDate,
		budget: budget
		}
	})
	.then(response => {
		console.log('person updated')
		this.props.history.push(`/people`);
	})
	.catch(err => {
		console.log('Error in editForm, personSubmit', err)
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
	const p = this.props.people.filter(person => {
		console.log(person.id)
		return person.id === parseInt(this.props.match.params.id)
	})[0];
	console.log(p)
	return(
		<div className="contents">
				<h1>Edit whatever was wrong</h1>
				<div className="dashboard">
				<form onSubmit={this.personSubmit}>
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
					<button type="submit" value="Submit">Submit</button>
				</form>
				</div>
			</div>
			);
}


}

export default EditForm;