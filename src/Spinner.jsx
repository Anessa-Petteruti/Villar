import React, {Component} from 'react';
import "./Spinner.css";

class Spinner extends Component {
  

  render() {
    return (
    <div className="houseSpinnerDiv">
      <img className="houseSpinner" src={require('./images/loading-wedge.gif')} alt="House gif"/>
    </div>

  );
  }
}

export default Spinner; 

