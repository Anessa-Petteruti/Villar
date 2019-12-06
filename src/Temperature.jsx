import React, { Component } from 'react';
import "./Temperature.css";

class Temperature extends Component{
render(){
    var {Temp, Name} = this.props;
    if(Temp === "Loading"){
      return <div className="loading">Loading Your Local Weather...</div>
    }
    else {
      Temp = (Temp - 273.15) * (9/5) + 32
      Temp = Math.round(Temp)
      return(
        <div className='displayWeather'>
          <div className="cityDiv">
            {Name} Weather
          </div>
          <img className="weatherIcon" src={require('./images/cloudy.png')} alt="Weather icon"/>
          <div className="tempDiv">
            {Temp}
          </div>
          <div className="degSymbol">&#176;F</div>
        </div>
      )
    }
}
}
export default Temperature;