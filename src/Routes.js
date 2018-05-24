import React from "react";
import { Route, Switch } from "react-router-dom";
import Vacancies from "./views/Vacancies";
import Login from "./views/Login";
import Logout from "./views/Logout";
import SignUp from "./views/SignUp";
import NotFound from "./views/NotFound";
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from './auth'

export default () =>
	<Switch>
		<Route path="/" exact component={Vacancies} />
		<Route path="/login" exact component={userIsNotAuthenticatedRedir(Login)} />
		<Route path="/logout" exact component={userIsAuthenticatedRedir(Logout)} />
		<Route path="/signup" exact component={userIsNotAuthenticatedRedir(SignUp)} />
		<Route component={NotFound} status={404} />
	</Switch>;
