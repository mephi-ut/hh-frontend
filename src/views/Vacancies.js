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
