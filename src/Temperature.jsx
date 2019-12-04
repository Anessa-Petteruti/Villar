import React, { Component } from 'react';
import "./Temperature.css";

class Temperature extends Component{
render(){
    var {Temp, Lat, Name, Long} = this.props;
    if(Temp==='Loading'){
      return <div className='loading'>Loading Your Local Weather...</div>
    }
    else {
      console.log(Temp);
      var Lat = Math.round(Lat)
      var Long = Math.round(Long)
      var Temp = Math.round(Temp)
      return(
        <div className='displayWeather'>
          <div className="cityDiv">
            {Name} Weather
          </div>
          <img className="weatherIcon" src={require('./images/cloudy.png')} alt="Weather icon"/>
          <div className="tempDiv">
            {Temp} &#8451;
          </div>
        </div>
      )
    }
}
}
export default Temperature;