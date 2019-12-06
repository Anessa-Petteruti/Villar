import React, { Component } from "react";

class Location extends Component{
	constructor(props) {
 		super(props);
		this.state = {
 			latX:"Loading",
 			longY:"Loading"
 		}
 	}
 	componentDidMount() {
 	var that = this;
 	navigator.geolocation.getCurrentPosition(
 	function(position) {
 	that.setState({
 		latX: position.coords.latitude,
 		longY: position.coords.longitude
 	});
 	that.props.getTempData(that.state.latX,that.state.longY)
 	},
 	function (error) {
	},
 		{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
 	)
 	}
 	render () {
		return <div></div>
 	}
}
export default Location;