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

    handleSubmit = event => {
        let username= localStorage.getItem('username');
        let self=this;
        event.preventDefault();
        fetch('http://192.168.0.21:9000/add-question/', {
            method: 'POST',
            crossDomain: true,
            //credentials: 'include',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body: JSON.stringify({
                title: this.state.Title,
                description: this.state.Description,
                score:this.props.id,
                bonus:this.state.Bonus,
                input1:this.state.Input1,
                output1:this.state.Output1,
                input2:this.state.Input2,
                output2:this.state.Output2
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
                        type="Number"
                    />
                </FormGroup> <FormGroup controlId="Bonus" bsSize="large">
                    <ControlLabel>Bonus</ControlLabel>
                    <FormControl
                        value={this.state.Bonus}
                        onChange={this.handleChange}
                        type="Number"
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
