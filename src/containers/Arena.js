import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../bootstrap.css"
import QuestDetail from "./QuestDetail";


export default class Arena extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questdetail:false,
            quest_desc:'',
            quest_id:'',
            quest_title:''

        };
        this.questiondetail=this.questiondetail.bind(this);

    }

    questiondetail(title,quest_desc,quest_id){
        this.setState({questdetail:true, quest_title:title, quest_desc:quest_desc, quest_id:quest_id})
    }

    render(){
        let res= [
            {
            "Title": "Area of a square",
            "Description": "Find the area of a square without using built-in functions",
            "Score": "10",
            "id": "id1",
            "Bonus": "bonus info",
            "AttemptedBy": 5,
            "SolvedBy": 2,
            "BonusCapturedBy": "username",
            },
            {
                "Title": "Pascals Trianle",
                "Description": "Print the pascals Triangle using '*', without using any built in functions ",
                "Score": "10",
                "id": "id1",
                "Bonus": "bonus info",
                "AttemptedBy": 5,
                "SolvedBy": 2,
                "BonusCapturedBy": "username",
            }]




        let tbody=res.map((data,i)=>{
            return(<tr>
                    <td>{data.Title}</td>
                    <td>{data.Score}</td>
                    <td>{data.Bonus}</td>
                    <td>{data.AttemptedBy}</td>
                    <td>{data.SolvedBy}</td>
                    <td>{data.BonusCapturedBy}</td>
                    <td onClick={this.questiondetail.bind(this,data.Title,data.Description,data.id)}> <a> Im in </a> </td>

                </tr>)

        });

        let body=''

        if(this.state.questdetail===false) {

             body = (<div className="container">
                    <h2>Questions</h2>
                    <p></p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th >Score</th>
                            <th>Bonus</th>
                            <th>Attempts</th>
                            <th>Suceess</th>
                            <th>BonusCapturedBy</th>

                        </tr>
                        </thead>
                        <tbody>
                        {tbody}

                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            body = <QuestDetail
                    desc={this.state.quest_desc}
                    id={this.state.quest_id}
                    title={this.state.quest_title}/>
        }
        return (
            <div>{body}</div>

        );
    }

}