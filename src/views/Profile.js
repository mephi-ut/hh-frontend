import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Profile.css";
import "./Form.css";
import { connect } from 'react-redux'
import { BaseComponent } from "../components/BaseComponent";

export class ProfileView extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			login: this.props.profile.Nickname,
			password: "",
			password_confirm: "",
			email: this.props.profile.Email,
		};
	}

	componentDidMount() {
	}

	validateForm() {
		return this.state.login.length > 0 && this.state.password_confirm === this.state.password;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.updateProfile();
	}

	updateProfile() {
		this.api('profile', {method: 'PUT'}, {username: this.state.login, password: this.state.password, email: this.state.email})
			.then(function(){
				console.log('success');
			});
	}

	isDisabled() {
		return !this.validateForm()
	}

	render() {
		if (this.props.profile.Nickname === undefined) {
			return "";
		}
		return (
			<div className="Profile Form">
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="login" bsSize="large">
						<ControlLabel>Login</ControlLabel>
						<FormControl
							autoFocus
							type="login"
							value={this.state.login}
							onChange={this.handleChange}
							required="true"
						/>
					</FormGroup>
					<FormGroup controlId="password" bsSize="large">
						<ControlLabel>Password</ControlLabel>
						<FormControl
							value={this.state.password}
							onChange={this.handleChange}
							type="password"
						/>
					</FormGroup>
					<FormGroup controlId="password_confirm" bsSize="large">
						<ControlLabel>Password (confirm)</ControlLabel>
						<FormControl
							value={this.state.password_confirm}
							onChange={this.handleChange}
							type="password"
						/>
					</FormGroup>
					<FormGroup controlId="email" bsSize="large">
						<ControlLabel>Email</ControlLabel>
						<FormControl
							value={this.state.email}
							onChange={this.handleChange}
							type="email"
						/>
					</FormGroup>
					<Button
						block
						bsSize="large"
						disabled={this.isDisabled()}
						onClick={this.handleSubmit}
						type="submit"
					>
						Update
					</Button>
				</form>
			</div>
		);
	}
}

export default connect(null, null)(ProfileView)
