import React from 'react';
//import { Navbar, ButtonToolbar, Button } from "react-bootstrap";
import { Navbar, ButtonToolbar } from "react-bootstrap";
import logo from './favicon.ico';
import './Page.css';
import { Router, NavLink } from 'react-router-dom'
import { createBrowserHistory as createHistory } from "history";
import Routes from "./Routes";
import { connect } from 'react-redux'
import { tryToken, loginUserSuccess, loginUserFailure } from './actions/user'
import { BaseComponent } from "./components/BaseComponent";

//import { userIsAuthenticated, userIsNotAuthenticated } from './auth'

import Popup from "./views/Popup";

//import "react-select-search/style.css"


const VacanciesLink = () => (<NavLink exact to="/">Вакансии</NavLink>)
const LoginLink = () => <NavLink exact to="/login" className='requireNotAuthed'>Войти</NavLink>
const LogoutLink = () => <NavLink exact to="/logout" className='requireAuthed'>Выйти</NavLink>
const ProfileLink = () => <NavLink exact to="/profile" className='requireAuthed'>Профиль</NavLink>

class Page extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {
			history: createHistory(),
			user: {
			},
			profile: {
			},
		};
		this.tryToken();
	}

	tryToken() {
		var oldToken = localStorage.getItem('token');
		if (oldToken != null) {
			this.props.tryToken(oldToken, this);
		}
	}

	onAuthed(token) {
		//console.log("onAuthed");
		//this.state.history.push("/");
		//console.log(this.state, this.props);
		this.props.loginUserSuccess(token);
		this.api('profile').then(data => this.setProfile(data));
	}

	onAuthFailed(error) {
		//console.log("onAuthFailed");
		this.props.loginUserFailure(error)
	}

	setProfile(profile) {
		//console.log('profile', profile);
		this.setState({
			history: this.state.history,
			user: this.state.user,
			profile: profile,
		});
	}

	componentDidMount() {
		//console.log('Page: componentDidMount()');
	}

	componentDidUpdate(prevProps, prevState) {
		//console.log('Page: componentDidUpdate(): ', this.props);
		if (this.props.isLoading) {
			return;
		}
		var prevToken = "";
		var newToken = "";
		if (prevProps.user.data != null) {
			prevToken = prevProps.user.data.token;
		}
		if (this.props.user.data != null) {
			newToken = this.props.user.data.token;
		}
		if (prevToken === newToken) {
			return;
		}
		//console.log("the token changed: ", prevToken, newToken);
		this.api('profile').then(data => this.setProfile(data));
	}

	render() {
		//console.log('Page props', this.props);
		if (this.props.user.redirectTo != null) {
			this.state.history.push(this.props.user.redirectTo);
		}
		return (
			<Router history={this.state.history} user={this.props.user}>
				<div className={"Page"+(this.props.user.data==null?' notAuthed':' authed')}>
					<Navbar fluid collapseOnSelect>
						<Navbar.Header>
							<Navbar.Collapse>
								<Navbar.Brand>
									<VacanciesLink />
									<LoginLink />
									<LogoutLink />
									<ProfileLink />
								</Navbar.Brand>
							</Navbar.Collapse>
							<Navbar.Toggle />
						</Navbar.Header>
					</Navbar>
					<Popup message={this.props.user.message}/>
					<Routes user={this.props.user} profile={this.state.profile} />
					<ButtonToolbar>
					</ButtonToolbar>
					<img src={logo} className="Page-logo" alt="logo" />
				</div>
			</Router>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user,
})

export default connect(mapStateToProps, { tryToken, loginUserSuccess, loginUserFailure })(Page);
