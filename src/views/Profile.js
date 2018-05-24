import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Profile.css";
import "./Form.css";
import { connect } from 'react-redux'
import { updateProfile } from '../actions/user'
import { BaseComponent } from "../components/BaseComponent";

export class ProfileView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			login: this.props.whoami.Nickname,
			password: "",
			password_confirm: "",
			email: this.props.whoami.Email,
		};
	}

	componentDidMount() {
	}

	validateForm() {
		return true;
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
		this.props.updateProfile();
	}

	isDisabled() {
		return !this.validateForm()
	}

	render() {
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

export default connect(null, { updateProfile })(ProfileView)
