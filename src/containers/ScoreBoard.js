import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../bootstrap.css"
import {serverlocation} from "../utils"

export default class ScoreBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scores:[]

        };

    }

    componentWillMount(){
        let self=this;
        //fetch('http://127.0.0.1:8000/scoreboard/', {
        //fetch('http://206.189.154.20:9000/scoreboard/', {
        fetch('http://206.189.154.20:9000/scoreboard/', {
            method: 'GET',
            crossDomain: true,
            // headers: {
            //     'Content-type': 'application/json',
            //      'mode':'no-cors'
            // },
            //credentials: true,
            // body: JSON.stringify({
            //     title: this.state.email,
            //     description: this.state.password
            })

            .then(function(response) {
                response.text().then(function (object){
                         var obj = JSON.parse(object);
                         self.setState({scores:obj['scoreboard']})
                     })

                    });
        }



    render(){

        let tbody=this.state.scores.map((data,i)=>{
            return(<tr>
                <td>{data.UserName}</td>
                <td>{data.Score}</td>
                <td>{data.CreatedAt}</td>
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
                        <th>Last logged in</th>
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