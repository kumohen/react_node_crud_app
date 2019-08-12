import React, { Component } from 'react';
import axios from 'axios';
import UserList from './UserList';
class App extends Component {
    state={
      users:[]
    }
  componentWillMount(){
    axios.get('http://localhost:5000/users')
      .then(response =>{
        this.setState({users:response.data})
      })
  }
  
  
  render() {
    const {users} = this.state;
    return (
      <div>
        {users.map((user,index) => (
           <ul>
             <UserList user={user} key={index}/>
            </ul>
        )
       
        )}
      </div>
    );
  }
}

export default App;
