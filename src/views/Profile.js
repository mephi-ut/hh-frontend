import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Profile.css";
import { connect } from 'react-redux'
import { loginUser } from '../actions/user'

export class LoginView extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	validateForm() {
		return true;
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.updateProfile();
	}

	updateProfile() {
		alert('Not implemented, yet')
	}

	isDisabled() {
		return !this.validateForm()
	}

	render() {
		return (
			<div className="Profile">
				<form onSubmit={this.handleSubmit}>
					<input type='hidden' name='userId' value={this.props.user.data.UserId} />
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
							required="true"
						/>
					</FormGroup>
					<FormGroup controlId="password_confirm" bsSize="large">
						<ControlLabel>Password (confirm)</ControlLabel>
						<FormControl
							value={this.state.password_confirm}
							onChange={this.handleChange}
							type="password"
							required="true"
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
						Login
					</Button>
				</form>
				<br/>
				<br/>
				<Button
					block
					bsSize="large"
					type="button"
					onClick={this.gotoSignUp}
				>
					Sign up
				</Button>
			</div>
		);
	}
}

export default connect(null, { loginUser })(LoginView)
