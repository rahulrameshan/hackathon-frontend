import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../containers/Login.css";
import {serverlocation} from "../utils"

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loggedin:0
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        let self=this;
        event.preventDefault();
        fetch('http://192.168.0.21:9000/i-am-me/', {
            method: 'POST',
            crossDomain: true,
            //credentials: 'include',
            body: JSON.stringify({
                username: this.state.email,
                password: this.state.password
            })
        })
                .then(function(response) {
                    response.text().then(function (object){
                    var obj = JSON.parse(object);
                     console.log("obj succesas", obj["success"])
                     if(obj['success']==true){
                         console.log("if condition called");
                         self.props.setlogin(1);
                         localStorage.setItem('username',self.state.email);
                     }
                     else{
                         console.log('else condition');
                     }


                })

             });
    }


    render() {
        console.log("state", this.state.loggedin);
        let data=''
        if(this.state.loggedin===0) {

            data = (<div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>)
        }
        else if(this.state.loggedin===1)
        {

            data=(<h1> welcome user</h1>)
        }


        return (
            <div>{data}</div>
        );
    }
}