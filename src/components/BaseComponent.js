import { Component } from "react";
import { api } from "../actions/api.js";
//import { connect } from 'react-redux';

export class BaseComponent extends Component {
	api(resource, options, parameters) {
		var token = '';
		if (this.props.user.data != null) {
			token = this.props.user.data.token
		}
		return api(resource, options, parameters, token);
	}
}

//export default connect(state => (state))(BaseComponent)
