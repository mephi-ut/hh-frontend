import React, { Component } from "react";
import "./Vacancies.css";
import { BaseComponent } from "../components/BaseComponent";
import { connect } from 'react-redux';

class VacanciesView extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			whoami: null,
		}
	}

	setWhoami(whoami) {
		this.setState({
			whoami: whoami
		});
	}

	componentDidMount() {
		if (this.props.user.data == null) {
			return;
		}
		this.api('whoami').then(data => this.setWhoami(data));
	}

	render() {
		return "";
		console.log('status props', this.props, this.state);
		return (
			<div>
				test
			</div>
		);
	}
}

export default connect(state => (state))(VacanciesView)
