import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Frontend.css";
import "../Vacancies.css";
import { BaseComponent } from "../../components/BaseComponent";
import { connect } from 'react-redux';

class VacancyFrontendView extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			profile: null,
		}
	}

	gotoTest = () => {
		this.props.history.push('/vacancies/frontend/test');
	}

	render() {
		return (
			<div className='vacancy'>
				<h1>Frontend-разработчик (ReactJS)</h1>
				<p><a href='https://voip.mephi.ru/units/0153613' target='_blank'>Отдел юникс-технологий управление информатизации НИЯУ МИФИ</a> ищет разработчика на ReactJS на полставки.</p>
				<h3>Условия</h3>
				<ul className='conditions'>
					<li>20 часов в неделю. Допустима частично удалённая работа.</li>
					<li>Зарплата — средняя по рынку труда (в сфере «frontend developer» по гор. Москве).</li>
				</ul>
				<h3>Обязанности</h3>
				<ul className='duties'>
					<li>Разработка frontend на основе фреймворка «ReactJS».</li>
				</ul>
				<h3>Требования</h3>
				<ul className='requirements'>
					<li>Гражданство РФ.</li>
					<li>Опыт работы с ReactJS не менее 2 лет.</li>
					<li>Опыт работы с ОС GNU/Linux не менее 1 года.</li>
				</ul>
				<h3>Плюсом будет</h3>
				<ul className='desirable'>
					<li>Опыт работы с Git.</li>
					<li>Опыт работы с nginx.</li>
					<li>Опыт работы с Golang, PHP и/или Ruby.</li>
					<li>Опыт дизайнерской работы и разработки проектов интерфейсов.</li>
					<li>Опыт работы в сфере UI/UX.</li>
					<li>Опыт работы с RESTful API</li>
					<li>Проживание поблизости НИЯУ МИФИ.</li>
				</ul>
				<br/>
				<Button
					block
					bsSize="large"
					type="button"
					bsStyle="primary"
					onClick={this.gotoTest}
				>
					Перейти к форме подачи заявки
				</Button>
			</div>
		);
	}
}

export default connect(state => (state))(VacancyFrontendView)
