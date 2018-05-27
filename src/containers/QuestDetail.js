import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../bootstrap.css"


export default class QuestDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            select:"",
            Description:""


        };
        this.handleChange=this.handleChange.bind(this);
        this.validateForm=this.validateForm.bind(this);

    }

    validateForm() {
        return this.state.Description.length > 0 && this.state.select.length > 0
    }

    handleChange = event => {
        console.log("event",event);
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        console.log("select val",this.state.select)
        let self=this;
        event.preventDefault();
        fetch('http://127.0.0.1:8000/program/', {
            method: 'POST',
            crossDomain: true,
            //credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                language: this.state.select,
                description: this.state.Description
            })
        })
            .then(function(response) {
                if(response.status===200){
                    console.log("200 status");
                    response.json().then(function (object){
                        console.log("object", object);
                    })

                }
            })
    }

    render(){

        let  data = (<div className="Login">
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="select">
                <ControlLabel>Select Your language</ControlLabel>
                <FormControl componentClass="select" placeholder="select"
                             onChange={this.handleChange}>
                    <option value="">Select Any value</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C++">C++</option>
                    <option value="C">C</option>

                </FormControl>
            </FormGroup>


                <FormGroup controlId="Description" bsSize="large">
                    <ControlLabel>Code in Here</ControlLabel>

                    <FormControl
                        componentClass="textarea"
                        style={{ height: 200 }}
                        onChange={this.handleChange}
                        value={this.state.Description}>
                    </FormControl>


                </FormGroup>
                <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                >
                    RUN CODE
                </Button>
            </form>
            </div>
                   )
        return(<div><h1>{this.props.title}</h1>
            <p>{this.props.desc}</p>
            {/*<p>{this.props.id}</p>*/}
                    {data}
        </div>);
    }
}


