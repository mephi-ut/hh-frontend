import React from "react";
import "./Vacancies.css";
import { BaseComponent } from "../components/BaseComponent";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class VacanciesView extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			profile: null,
		}
	}

	render() {
		return (
			<ul>
				<li><NavLink exact to="/vacancies/frontend">Frontend-разработчик (ReactJS)</NavLink></li>
			</ul>
		);
	}
}

export default connect(state => (state))(VacanciesView)
