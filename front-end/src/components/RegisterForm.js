import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class RegisterForm extends Component{
    state = {
        username:"",
        email: "",
        phone: 0
    };

    componentDidMount(){

    }

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <Form onSubmit = "">
                <FormGroup>
                    <Label for="username">Username:</Label>
                    <Input type="text" name="username" id="username" required onChange={this.onChange} value={this.state.username} />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="email" required onChange={this.onChange} value={this.state.email} />
                </FormGroup>

                <FormGroup>
                    <Label for="phone">Phone:</Label>
                    <Input type="tel" name="phone" id="phone" required onChange={this.onChange} value={this.state.phone} />
                </FormGroup>

                <Button onClick="">Sign Up</Button>
                
            </Form>
        )
    }
}

export default RegisterForm;