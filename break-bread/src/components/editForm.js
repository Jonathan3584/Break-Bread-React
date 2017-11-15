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
	return()
}


}

export default EditForm;