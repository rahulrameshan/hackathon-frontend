import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../containers/Login.css";
import "../bootstrap.css"
import ScoreBoard from "./ScoreBoard";
import Arena from "./Arena";
import NewQuestion from "./NewQuestion";

export default class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab:1

        };
        this.tabonehandler=this.tabonehandler.bind(this);
        this.tabtwohandler=this.tabtwohandler.bind(this);
        this.tabthreehandler=this.tabthreehandler.bind(this);
    }

    tabonehandler(){
        this.setState({tab:1})
    }
    tabtwohandler(){
        this.setState({tab:2})
    }
    tabthreehandler(){
        this.setState({tab:3})
    }
    
    render(){
        let body='';
        if(this.state.tab===1){
            body=<ScoreBoard />
        }
        if(this.state.tab===2){
            body=(<Arena />)
        }
        if(this.state.tab===3){
            body=(<NewQuestion />)
        }

        let header=(<nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#" onClick={this.tabonehandler}>ScoreBoard</a>
                    <a className="navbar-brand" href="#" onClick={this.tabtwohandler}>Compete</a>
                    <a className="navbar-brand" href="#" onClick={this.tabthreehandler}>Add question</a>

                </div>
            </div>
        </nav>)
        return (
            <div><div>{header}</div>
                <div>{body}</div>
                    </div>

        );
    }

}