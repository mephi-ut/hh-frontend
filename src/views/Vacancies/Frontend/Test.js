import React from "react";
import { Checkbox, Button, FormGroup, FormControl, ControlLabel, Radio } from "react-bootstrap";
import "./Test.css";
import "../Frontend.css";
import "../../Vacancies.css";
import { BaseComponent } from "../../../components/BaseComponent";
import { connect } from 'react-redux';
import ReactTelInput from 'react-telephone-input';

class VacancyFrontendTestView extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			phone: "",
			requestingContacts: true,
		}

		this.form = React.createRef();
	}

	validateForm() {
		return !this.contactsAreNotEntered();
	}

	isDisabled() {
		return !this.validateForm();
	}

	handleSubmit(ev) {
		ev.preventDefault();
		var values = {};
		for(var i=0; i<this.form.current.elements.length; i++) {
			var el = this.form.current.elements[i];
			if (el.name === "") {
				continue
			}
			values[el.name] = el.value;
		}
		values["phone"] = this.state.phone;
		var history = this.props.history;
		this.api(this.props.location.pathname.substr(1), {method: 'POST'}, values)
			.then(function(response) {
				if (response.status === "OK") {
					alert('Заявка отправлена');
					history.push('/');
				} else {
					alert('Не удалось отправить заявку: '+response.error);
				}
			})
			.catch((error) => {
				alert('Не удалось отправить заявку: '+error);
			});
	}

	hasContactsInProfile() {
		if (this.props.profile == null) {
			return false;
		}
		if (
			( this.props.profile.Email == null || this.props.profile.Email === "")  && 
			( this.props.profile.Phone == null || this.props.profile.Phone.length < 16 )
		) {
			return false;
		}
		return true;
	}

	contactsAreNotEntered() {
		return !this.hasContactsInProfile() && this.state.email === "" && this.state.phone.length < 16;
	}

	componentDidMount() {
		//console.log('VacancyFrontendTestView', this);
		this.setState({
			requestingContacts: !this.hasContactsInProfile(),
		})
	}

	onPhoneChange(telNumber, selectedCountry) {
		this.setState({phone: telNumber});
	}

	onEmailChange(ev) {
		this.setState({email: ev.target.value});
		//console.log(this.state);
	}

	render() {
		return (
			<div className='test'>
				Если испытываете затруднение при ответе на какой-то из вопросов, то пропустите его.<br/><br/>
				<form onSubmit={this.handleSubmit} method="POST" ref={this.form}>
					<FormGroup controlId="expected_salary" bsSize="large">
						<ControlLabel>Ожидаемая зарплата:&nbsp;</ControlLabel>
						<FormControl type="number" name="expected_salary" min="1" max="500" maxLength="3" />&nbsp;тыс. ₽
					</FormGroup>
					<FormGroup controlId="expected_employment" bsSize="large">
						<ControlLabel>Ожидаемая занятость:&nbsp;</ControlLabel>
						<select name="expected_employment" defaultValue='0.5'>
							<option value="0.25">¼ ставки</option>
							<option value="0.5">полставки</option>
							<option value="1.0">полная ставка</option>
						</select>
					</FormGroup>
					<hr />
					<FormGroup controlId="question1" bsSize="large">
						<ControlLabel>№1. Какие из нижеуказанных способов корректы для создания множества элементов без создания родителя?</ControlLabel>
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
					<hr />
					<FormGroup controlId="question2" bsSize="large">
						<ControlLabel>№2. Каким из нижеуказанных способов в ReactJS оптимизируется изменение/обновление большого количества узлов?</ControlLabel><br/>
						<ul>
							<li><Radio name='question2'>Группировка изменений/обновлений</Radio></li>
							<li><Radio name='question2'>Обнаружение изменений</Radio></li>
							<li><Radio name='question2'>Оба ответа верны</Radio></li>
						</ul>
					</FormGroup>
					<hr />
					<FormGroup controlId="question3" bsSize="large">
						<ControlLabel>№3. Есть ли у вас идеи как улучшить код проекта <a href='https://github.com/mephi-ut/hh-frontend' target='_blank' rel="noopener noreferrer">https://github.com/mephi-ut/hh-frontend</a> (если да, то какие)?</ControlLabel><br/>
						<textarea name="question3" />
					</FormGroup>
					<hr />
					<FormGroup controlId="question4" bsSize="large">
						<ControlLabel>№4. Если имеется возможность, укажите ссылки на примеры ваших проектов:</ControlLabel><br/>
						<textarea name="question4" />
					</FormGroup>
					<hr />
					<br />
					{ !this.state.requestingContacts ? <div></div> :
						<div>
							Укажите, пожалуйста, почтовый адрес и/или номер телефона:<br />
							<FormControl type='email' name='email' placeholder='адрес электронной почты' size='30' onChange={this.onEmailChange.bind(this)} />
							<ReactTelInput
								name="phone"
								defaultCountry='ru'
								onChange={this.onPhoneChange.bind(this)}
								flagsImagePath='/images/flags.png'
							/>
							<br />
						</div>
					}
					<FormGroup controlId="comment" bsSize="large">
						<ControlLabel>Здесь вы можете (если желаете) оставить дополнительный комментарий:</ControlLabel><br/>
						<textarea name="comment" />
					</FormGroup>
					<Button
						block
						bsSize="large"
						bsStyle="primary"
						disabled={this.isDisabled()}
						onClick={this.handleSubmit.bind(this)}
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
