import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class FeedbackForm extends Component{
    state = {
        email: "",
        subject:"",
        message:"",
        selectedFile: null,
    }
    
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    onFileChange = e => {
        this.setState({selectedFile: e.target.files[0]});
    };

    render() {
        return (
            <Form onSubmit = "">
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="email" required onChange={this.onChange} value={this.state.email} />
                </FormGroup>

                <FormGroup>
                    <Label for="subject">Subject:</Label>
                    <Input type="text" name="subject" id="subject" required onChange={this.onChange} value={this.state.subject} />
                </FormGroup>

                <FormGroup>
                    <Label for="message">Message:</Label>
                    <Input type="textarea" name="message" id="message" required onChange={this.onChange} value={this.state.message} />
                </FormGroup>

                <FormGroup>
                    <Label for="file">Attach:</Label>
                    <Input type="file" name="file" id="file" onChange={this.onFileChange} />
                </FormGroup>

                <Button onClick= "">Send</Button>
            </Form>
        )
    }
}

export default FeedbackForm;