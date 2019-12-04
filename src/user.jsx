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
      console.log(users);
      return(

        <div id="userDiv"> Users on Villar
          <div id="list">
          {users.map(user => 

              <div id="userDisplay">{user.name}</div>
            )}
          </div>
          <div className="showUsers" onClick={this.displayUsers}>
          <button>onClick={this.displayUsers}</button>
          
          <label >Show users</label>
          </div>
        </div>
      )
    
}
}
export default User;