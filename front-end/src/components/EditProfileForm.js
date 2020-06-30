import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import querystring, { stringify } from "querystring";

import axios from "axios";

import {API_URL_USER} from "../constants";

class EditProfileForm extends Component{
    state = {
        id: 0,
        firstname: "",
        lastname: "",
        about_me: "",
        college_name:"",
        department:"",
        phone:0,
    };

    componentDidMount(){
        if (this.props.user){
            const{id, firstname, lastname, about_me, college_name, department, phone} = this.props.user;
            this.setState({id:id, 
                firstname:firstname, 
                lastname:lastname, 
                about_me:about_me,
                college_name:college_name,
                department:department,
                phone:phone,
            });
        }
    }
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    };
    
    updateProfile = event => {
        event.preventDefault();
        axios.patch(API_URL_USER+this.state.id+"/",this.state,{headers:{'Content-Type':'application/x-www-form-urlencoded'}} ).then(res => {
            this.props.resetState();
            this.props.toggle();        
        });
    };

    render() {
       
        return(
            <Form onSubmit = {this.updateNews}>
                <FormGroup>
                    <Label for="firstname">First Name</Label>
                    <Input type="text" name="firstname" id="firstname" onChange={this.onChange} value={this.state.firstname} />
                </FormGroup>

                <FormGroup>
                    <Label for="lastname">Last Name</Label>
                    <Input type="text" name="lastname" id="lastname" onChange={this.onChange} value={this.state.lastname} />
                </FormGroup>

                <FormGroup>
                    <Label>About Me</Label>
                    <Input type="textarea" name="about_me" id="about_me" onChange={this.onChange} value={this.state.about_me} />
                </FormGroup>

                <FormGroup>
                    <Label>College Name</Label>
                    <Input type="text" name="college_name" id="college_name" onChange={this.onChange} value={this.state.college_name} />
                </FormGroup>

                <FormGroup>
                    <Label>Department</Label>
                    <Input type="text" name="department" id="department" onChange={this.onChange} value={this.state.department} />
                </FormGroup>

                <FormGroup>
                    <Label>Phone</Label>
                    <Input type="number" maxLength="10" name="phone" id="phone" onChange={this.onChange} value={this.state.phone} />
                </FormGroup>

                <Button>Send</Button>

            </Form>
        );
    }
}

export default EditProfileForm;