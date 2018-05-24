import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import "./Form.css";
import { connect } from 'react-redux'
import { loginUser } from '../actions/user'

export class LoginView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			login: "",
			password: "",
			redirectTo: "/",
		};
	}

	componentDidMount() {
		if (window.location.search.indexOf('redirect=%2Flogout') == 1) {
			this.props.history.push('/login');
		}
		console.log(this.props, window.location, window.location.search.indexOf('redirect=%2Flogout'));
	}

	validateForm() {
		return this.state.login.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.login();
	}

	login() {
		this.props.loginUser(this.state.login, this.state.password, this.state.redirectTo);
	}

	isDisabled() {
		return !this.validateForm()
	}

	gotoSignUp = () => {
		this.props.history.push('/signup')
	}
	render() {
		return (
			<div className="Login Form">
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="login" bsSize="large">
						<ControlLabel>Login</ControlLabel>
						<FormControl
							autoFocus
							type="login"
							required="true"
							value={this.state.login}
							onChange={this.handleChange}
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
