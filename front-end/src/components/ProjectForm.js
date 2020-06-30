import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import querystring, { stringify } from "querystring";

import axios from "axios";

import {API_URL_USER} from "../constants";

class ProjectForm extends Component{
    state = {
        user_id: 0,
        name: "",
        description:"",
        technology: "",
        date: "",
    }
    componentDidMount(){
        if (this.props.project){
            const{user_id, name, description, technology, date } = this.props.project;
            this.setState({ 
                user_id: user_id,
                name: name,
                description:description,
                technology: technology,
                date: date,
            });
        }
    }
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    createProject = event => {
        event.preventDefault();
        axios.patch(API_URL_USER+this.state.id+"/",this.state,{headers:{'Content-Type':'application/x-www-form-urlencoded'}} ).then(res => {
            this.props.resetState();
            this.props.toggle();        
        });
    };
    
    updateProject = event => {
        event.preventDefault();
        axios.patch(API_URL_USER+this.state.id+"/",this.state,{headers:{'Content-Type':'application/x-www-form-urlencoded'}} ).then(res => {
            this.props.resetState();
            this.props.toggle();        
        });
    };

    render() {
      
        return(
            <Form onSubmit = {this.props.project ? this.updateProject : this.createProject}>
               
                <FormGroup>
                    <Label for="news_title">Name</Label>
                    <Input type="text" name="name" id="name" required onChange={this.onChange} value={this.state.name} />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" required onChange={this.onChange} value={this.state.description}/>
                </FormGroup>

                <FormGroup>
                    <Label for="technology">Technology</Label>
                    <Input type="text" name="technology" id="technology" required onChange={this.onChange} value={this.state.technology}/>
                </FormGroup>

                <FormGroup>
                    <Label for="date">Date started</Label>
                    <Input type="date" name="date" id="date" required onChange={this.onChange} value={this.state.date}/>
                </FormGroup>

                <Button>Send</Button>
    
            </Form>        
        );
    }
}

export default ProjectForm;
