import React, { Component } from "react";
import { connect } from 'react-redux'
import { logoutUser } from '../actions/user'

export class LoginView extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		this.props.logoutUser();
	}

	render() {
		return (
			<div className="Logout">
				Logging out…
			</div>
		);
	}
}

export default connect(null, { logoutUser })(LoginView)
