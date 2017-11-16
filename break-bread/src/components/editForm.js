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
			giftHoliday1: '',
			giftHoliday2: '',
			giftHoliday3: '',
			budget: ''
		}
		this.nameChange = this.nameChange.bind(this);
		this.addressChange = this.addressChange.bind(this);
		this.relationshipChange = this.relationshipChange.bind(this);
		this.birthDateChange = this.birthDateChange.bind(this);
		this.giftHoliday1Change = this.giftHoliday1Change.bind(this);
		this.giftHoliday2Change = this.giftHoliday2Change.bind(this);
		this.giftHoliday3Change = this.giftHoliday3Change.bind(this);
		this.budgetChange = this.budgetChange.bind(this);
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
giftHoliday1Change(event) {
event.preventDefault();
this.setState({
	giftHoliday1: event.target.value
})	
}
giftHoliday2Change(event) {
event.preventDefault();
this.setState({
	giftHoliday2: event.target.value
})	
}
giftHoliday3Change(event) {
event.preventDefault();
this.setState({
	giftHoliday3: event.target.value
})	
}
budgetChange(event) {
event.preventDefault();
this.setState({
	budget: event.target.value
})	
}

render(){
	return(<div>
				<h1>Add Someone You Care About</h1>
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
					<label>Anniversary: </label>
					<input
						type="date"
						onChange={this.giftHoliday1Change}
						value={this.state.giftHoliday1}
					/>
					<br />
					<label>Seasonal Holiday: </label>
					<input
						type="date"
						onChange={this.giftHoliday2Change}
						value={this.state.giftHoliday2}
					/>
					<br />
					<label>Just because: </label>
					<input
						type="date"
						onChange={this.giftHoliday3Change}
						value={this.state.giftHoliday3}
					/>
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>)
}


}

export default EditForm;