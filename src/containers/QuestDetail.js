import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../bootstrap.css"
import {serverlocation} from "../utils"

export default class QuestDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            select:"",
            Description:"",
            filename:"",
            result:"",
            output:""


        };
        this.handleChange=this.handleChange.bind(this);
        this.validateForm=this.validateForm.bind(this);

    }

    validateForm() {
        return this.state.Description.length > 0 && this.state.select.length > 0 && this.state.filename.length > 0
    }

    handleChange = event => {
        console.log("event",event);
        this.setState({
            [event.target.id]: event.target.value,
            result:"", output:""
        });
    }

    handleSubmit = event => {
        let username= localStorage.getItem('username');
        let self=this;
        event.preventDefault();
        fetch(serverlocation+'compile/', {
            method: 'POST',
            crossDomain: true,
            //credentials: 'include',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body: JSON.stringify({
                lang: this.state.select,
                script: this.state.Description,
                qn_id:this.props.id,
                filename:this.state.filename,
                username:username
            })
        })
            .then(function(response) {
                response.text().then(function (object){
                    var obj = JSON.parse(object);
                    self.setState({result:obj['message'], output:obj['output']})
                })

            });
    }

    render(){

        let  data = (<div className="Login">
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="select">
                <ControlLabel>Select Your language</ControlLabel>
                <FormControl componentClass="select" placeholder="select"
                             onChange={this.handleChange}>
                    <option value="">Select Any value</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="c++">C++</option>
                    <option value="ruby">Ruby</option>
                    <option value="go">go</option>
                    <option value="elixir">elixir</option>
                    <option value="lisp">lisp</option>
                    <option value="cobol">cobol</option>

                </FormControl>
            </FormGroup>

                <FormGroup controlId="filename" bsSize="large">
                    <ControlLabel>Your FileName</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={this.state.filename}
                        onChange={this.handleChange}
                    />
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

            let pretag=""
            if(this.state.output!=="")
            {
                pretag=(<pre>{this.state.output}</pre>)

            }
        return(<div><h1>{this.props.title}</h1>

            <p>{this.props.desc}</p>

            <h2>{this.state.result}</h2>


                    {data}
            <div>
                <p>{pretag}</p>

            </div>
        </div>);
    }
}


