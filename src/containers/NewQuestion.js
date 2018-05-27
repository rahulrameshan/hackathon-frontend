import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../bootstrap.css"


export default class NewQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
             Title:"" ,
             Description:"",
             Score: "",
             Bonus: "",
             Input1:"",
             Output1:"",
             Input2:"",
             Output2:""


        };
        }

    validateForm() {
        return this.state.Title.length > 0 && this.state.Score.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    // Title": "Length of String",
    // "Description": "Length of String",
    // "Score": 5,
    // "Bonus": 5,
    // "Input1":"hello world",
    // "Output1":"11",
    // "Input2":"eucalyptus",
    // "Output2":"10"

    render(){

        let  data = (<div className="Login">
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="Title" bsSize="large">
                    <ControlLabel>Title</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={this.state.Title}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="Description" bsSize="large">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl
                        value={this.state.Description}
                        onChange={this.handleChange}
                        type="Textarea"
                    />
                </FormGroup> <FormGroup controlId="Score" bsSize="large">
                    <ControlLabel>Score</ControlLabel>
                    <FormControl
                        value={this.state.Score}
                        onChange={this.handleChange}
                        type="Text"
                    />
                </FormGroup> <FormGroup controlId="Bonus" bsSize="large">
                    <ControlLabel>Bonus</ControlLabel>
                    <FormControl
                        value={this.state.Bonus}
                        onChange={this.handleChange}
                        type="Textarea"
                    />
                </FormGroup> <FormGroup controlId="Input1" bsSize="large">
                    <ControlLabel>Input1</ControlLabel>
                    <FormControl
                        value={this.state.Input1}
                        onChange={this.handleChange}
                        type="Textarea"
                    />
                </FormGroup>
                <FormGroup controlId="Output1" bsSize="large">
                    <ControlLabel>Output1</ControlLabel>
                    <FormControl
                        value={this.state.Output1}
                        onChange={this.handleChange}
                        type="Textarea"
                    />
                </FormGroup>
                <FormGroup controlId="Input2" bsSize="large">
                    <ControlLabel>Input2</ControlLabel>
                    <FormControl
                        value={this.state.Input2}
                        onChange={this.handleChange}
                        type="Textarea"
                    />
                </FormGroup>

                <FormGroup controlId="Output2" bsSize="large">
                    <ControlLabel>Output2</ControlLabel>
                    <FormControl
                        value={this.state.Output2}
                        onChange={this.handleChange}
                        type="Textarea"
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

        return(<div>{data}

        </div>);
    }
}
