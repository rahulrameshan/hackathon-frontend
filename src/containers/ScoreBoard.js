import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../bootstrap.css"

export default class ScoreBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scores:[]

        };

    }

    componentWillMount(){
        let self=this;
        fetch('http://127.0.0.1:8000/scoreboard/', {
            method: 'GET',
            crossDomain: true,
            //credentials: 'include',
            // body: JSON.stringify({
            //     title: this.state.email,
            //     description: this.state.password
            })

            .then(function(response) {
                if(response.status===200){
                    console.log("200 status");
                    response.json().then(function (object){
                        console.log("object", object.message);
                        self.setState({scores:object.message})
                    })
                    //self.props.setlogin(1)
                }
            })
    }



    render(){

        let tbody=this.state.scores.map((data,i)=>{
            return(<tr>
                <td>{data.name}</td>
                <td>{data.score}</td>
                <td>{data.pos}</td>
            </tr>)
        });

        let body=(<div className="container">
                <h2>Score Board</h2>
                <p></p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Score</th>
                        <th>Position</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tbody}

                    </tbody>
                </table>
            </div>
        )

        return (
            <div>{body}</div>

        );
    }

}