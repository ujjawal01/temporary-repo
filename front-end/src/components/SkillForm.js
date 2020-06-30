import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import querystring, { stringify } from "querystring";

import axios from "axios";

import {API_URL_USER} from "../constants";

class SkillForm extends Component{
    state = {}

    componentDidMount(){
        if (this.props.skill){
            const{} = this.props.skill;
            this.setState({});
           
        }
    }

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    createSkill = event => {}

    updateSkill = event => {}

    render() {
       
        return(
            <Form onSubmit = {this.props.skill ? this.updateSkill : this.createSkill}>
               
                <FormGroup>
                    <Label for="news_title">News Title:</Label>
                    <Input type="text" name="news_title" id="news_title" required onChange={this.onChange} value={this.state.news_title} />
                </FormGroup>

                <FormGroup>
                    <Label for="news_content">News Content:</Label>
                    <Input type="textarea" name="news_content" id="news_content" required onChange={this.onChange} value={this.state.news_content}/>
                </FormGroup>

                <FormGroup>  
                    <Input addon type="checkbox" name="visible" required checked={this.state.visible} onChange={this.onChangeVisible} />Visible       
                </FormGroup>
    
                <FormGroup>
                    <Label for="tags">News Tags:</Label>
                    <small>Press Comma to enter Tag. Press backspace to delete the last tag</small>
                    <div className="input-tag">
                       
                        <ul className="input-tag__tags">
                            { tagList.map((tag, i) => (
                                <li key={tag}>
                                    {tag}
                                    <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
                                 </li>
                            ))}
                            <li className="input-tag__tags__input"><input type="text" required={this.state.tagList===[]} onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
                        </ul>
                    </div>
                   
                </FormGroup>

                <FormGroup>
                    <Label for="audience">Audience</Label>
                    <Input type="select" name="audience" id="audience" multiple onChange={this.onChangeAudience}>
                        <option value="S" >Student</option>
                        <option value="T" >Teacher</option>
                        <option value="G">General</option>
                    </Input>
                </FormGroup>

                <Button>Send</Button>
               
            </Form>
            
        );
    }
}

export default SkillForm;