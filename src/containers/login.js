import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../containers/Login.css";

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
        fetch('http://127.0.0.1:8000/signup/', {
            method: 'POST',
            crossDomain: true,
            //credentials: 'include',
            body: JSON.stringify({
                title: this.state.email,
                description: this.state.password
            })
        })
            .then(function(response) {
                if(response.status===200){
                    console.log("200 status");
                    response.json().then(function (object){
                        console.log("object", object);
                    })
                    self.props.setlogin(1)
                }
            })
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