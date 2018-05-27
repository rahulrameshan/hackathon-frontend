import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./containers/login"
import Homepage from "./containers/homepage"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        loggedin:0
        };
        this.setlogin=this.setlogin.bind(this)
    }

  setlogin(value){
     this.setState({loggedin:value})

  }


  render() {
      let data=''
      if(this.state.loggedin===0){
        data=<Login
            setlogin={this.setlogin}
        />
      }
      else{
        data=<Homepage/>
      }
      return (
      <div className="App">
          {data}
      </div>
    );
  }
}

export default App;
