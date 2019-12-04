// import React, {Component} from 'react';
// import "./Spinner.css";
// import {Animated} from "react-native";

// class Spinner extends Component {
  
// state = {
//     opacity: new Animated.Value(0),
//   }

//   onLoad = () => {
//     Animated.timing(this.state.opacity, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   }

//   render() {
//     return (
//       <Animated.Image
//         onLoad={this.onLoad}
//         {...this.props}
//         style={[
//           {
//             opacity: this.state.opacity,
//             transform: [
//               {
//                 scale: this.state.opacity.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [0.85, 1],
//                 })
//               },
//             ],
//           },
//           this.props.style,
//         ]}
//       />
//     );
//   }
// }

  

// export default Spinner; 




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



