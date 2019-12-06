import React, { Component } from 'react';
import "./user.css";

class User extends Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

displayUsers = (e) => {
    if (this.state.show){
      this.setState({show: false});
      document.getElementById('list').style.display = "block";
    } else {
      this.setState({show: true});
      document.getElementById('list').style.display = "none";
    }
    
  }
  
render(){
      var users = this.props.users;
      return(

        <div id="userDiv"> <div id="villarUserTitle">Villar Users</div>
        <img className="userIcon" src={require('./images/user.png')} alt="User icon"/>
          <div id="list">
          {users.map(user => 

              <div key={user.id} id="userDisplay">{user.name}</div>
            )}
          </div>

          
          
        </div>
      )
    
}
}
export default User;