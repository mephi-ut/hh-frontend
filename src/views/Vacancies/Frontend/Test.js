import React, { Component } from "react";
import { Checkbox, Button, FormGroup, FormControl, ControlLabel, Radio } from "react-bootstrap";
import "./Test.css";
import "../Frontend.css";
import "../../Vacancies.css";
import { BaseComponent } from "../../../components/BaseComponent";
import { connect } from 'react-redux';

class VacancyFrontendTestView extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			profile: null,
		}
	}

	validateForm() {
		return true;
	}

	isDisabled() {
		return !this.validateForm()
	}

	render() {
		return (
			<div className='test'>
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="question1" bsSize="large">
						<ControlLabel>№1. Как создать компонент со множеством элементов и без родителя</ControlLabel>
						<Checkbox name="question1answer1"><pre>const Fruits = props => [<br/>
&nbsp;&nbsp;&lt;div key="apple"&gt;Apple&lt;/div&gt;,<br/>
&nbsp;&nbsp;&lt;div key="orange"&gt;Orange&lt;/div&gt;<br/>
];</pre></Checkbox>
						<Checkbox name="question1answer2"><pre>const Fruits = props => (<br/>
&nbsp;&nbsp;&lt;React.Fragment&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div key="apple"&gt;Apple&lt;/div&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div key="orange"&gt;Orange&lt;/div&gt;<br/>
&nbsp;&nbsp;&lt;/React.Fragment&gt;<br/>
);</pre></Checkbox>
						<Checkbox name="question1answer3"><pre>const Fruits = ['Apple', 'Orange'].map(fruit =&gt; &lt;div key={'{'}fruit{'}'}&gt;{'{'}fruit{'}'}&lt;/div&gt;);</pre></Checkbox>
					</FormGroup>
					<FormGroup controlId="question2" bsSize="large">
						<ControlLabel>№2. Каким из нижеуказанных способов оптимизируется изменение/обновление большого количества узлов?</ControlLabel><br/>
						<ul>
							<li><Radio name='question2'>Группировка изменения/обновления</Radio></li>
							<li><Radio name='question2'>Обнаружение изменений</Radio></li>
							<li><Radio name='question2'>Оба ответа верны</Radio></li>
						</ul>
					</FormGroup>
					<FormGroup controlId="question3" bsSize="large">
						<ControlLabel>№3. Какую ежемесячную зарплату вы ожидаете получать?</ControlLabel><br/>
						<FormControl name='question3' type="text "/>
					</FormGroup>
					<FormGroup controlId="question4" bsSize="large">
						<ControlLabel>№4. Есть ли у вас идеи как улучшить код проекта <a href='https://github.com/mephi-ut/hh-frontend' target='_blank'>https://github.com/mephi-ut/hh-frontend</a> (если да, то какие)?</ControlLabel><br/>
						<textarea name="question4" />
					</FormGroup>
					<br/>
					<Button
						block
						bsSize="large"
						bsStyle="primary"
						disabled={this.isDisabled()}
						onClick={this.handleSubmit}
						type="submit"
					>
						Отправить
					</Button>
				</form>
			</div>
		);
	}
}

export default connect(state => (state))(VacancyFrontendTestView)
