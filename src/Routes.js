import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Vacancies from "./views/Vacancies";
import Login from "./views/Login";
import Logout from "./views/Logout";
import SignUp from "./views/SignUp";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from './auth'

const addPropsToRoute = (WrappedComponent, passedProps)=>{
	return (
		class Route extends Component{
			render(){
				let props = Object.assign({}, this.props, passedProps)
				return  <WrappedComponent {...props} />
			}
		}
	)
}

export default (props) =>
	<Switch>{console.log('Switch', props)}
		<Route path="/" exact component={Vacancies} />
		<Route path="/login" exact component={userIsNotAuthenticatedRedir(Login)} />
		<Route path="/logout" exact component={userIsAuthenticatedRedir(Logout)} />
		<Route path="/signup" exact component={userIsNotAuthenticatedRedir(SignUp)} />
		<Route path="/profile" exact component={userIsAuthenticatedRedir(addPropsToRoute(Profile, props))} />
		<Route component={NotFound} status={404} />
	</Switch>;
