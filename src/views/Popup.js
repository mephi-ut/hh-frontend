import React, { Component } from "react";
import "./Popup.css";

export default class Popup extends Component {
	render() {
		if (this.props.message == null) {
			return ""
		}
		return (
			<div className="Popup">
				{this.props.message}
			</div>
		)
	}
}
